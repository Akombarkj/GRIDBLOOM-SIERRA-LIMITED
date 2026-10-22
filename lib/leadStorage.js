const fs = require('node:fs/promises');
const path = require('node:path');

const storagePath = path.join(process.cwd(), 'data', 'contact-submissions.json');

function cleanText(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ');
}

function buildLeadRecord(submission) {
  return {
    'First Name': cleanText(submission.firstName),
    'Last Name': cleanText(submission.lastName),
    Phone: cleanText(submission.phone),
    Community: cleanText(submission.community),
    'Connection Type': cleanText(submission.connectionType),
    'Estimated Load': cleanText(submission.load),
    Message: cleanText(submission.message),
  };
}

async function saveToLocalFile(entry) {
  await fs.mkdir(path.dirname(storagePath), { recursive: true });

  let existing = [];

  try {
    const content = await fs.readFile(storagePath, 'utf8');
    const parsed = JSON.parse(content);
    existing = Array.isArray(parsed) ? parsed : [];
  } catch {
    existing = [];
  }

  existing.push(entry);
  await fs.writeFile(storagePath, JSON.stringify(existing, null, 2), 'utf8');
}

async function saveToAirtable(entry) {
  const airtableApiKey = process.env.AIRTABLE_API_KEY;
  const airtableBaseId = process.env.AIRTABLE_BASE_ID;
  const airtableTableName = process.env.AIRTABLE_TABLE_NAME || 'Leads';

  if (!airtableApiKey || !airtableBaseId) {
    return null;
  }

  try {
    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);
    const payload = buildLeadRecord(entry);

    await base(airtableTableName).create([
      {
        fields: payload,
      },
    ]);

    return { source: 'airtable' };
  } catch (error) {
    console.error('Airtable submission failed:', error);
    return null;
  }
}

async function sendToEmail(entry) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;
  const fromAddress = process.env.EMAIL_FROM || 'noreply@gridbloom.local';

  if (!resendApiKey || !adminEmail) {
    return null;
  }

  try {
    const { Resend } = require('resend');
    const resend = new Resend(resendApiKey);
    const payload = buildLeadRecord(entry);
    const name = `${payload['First Name']} ${payload['Last Name']}`.trim() || 'New lead';

    const html = `
      <h2>New GridBloom connection request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${payload.Phone}</p>
      <p><strong>Community:</strong> ${payload.Community}</p>
      <p><strong>Connection Type:</strong> ${payload['Connection Type']}</p>
      <p><strong>Estimated Load:</strong> ${payload['Estimated Load']}</p>
      <p><strong>Message:</strong> ${payload.Message}</p>
    `;

    await resend.emails.send({
      from: fromAddress,
      to: adminEmail,
      subject: `New connection request from ${name}`,
      html,
    });

    return { source: 'email' };
  } catch (error) {
    console.error('Email notification failed:', error);
    return null;
  }
}

async function saveLead(submission) {
  const entry = {
    id: globalThis.crypto?.randomUUID?.() || `lead-${Date.now()}`,
    ...submission,
    createdAt: new Date().toISOString(),
  };

  const airtableResult = await saveToAirtable(entry);

  if (airtableResult) {
    return { success: true, source: 'airtable' };
  }

  const emailResult = await sendToEmail(entry);

  if (emailResult) {
    return { success: true, source: 'email' };
  }

  await saveToLocalFile(entry);
  return { success: true, source: 'local-json' };
}

module.exports = {
  buildLeadRecord,
  saveLead,
  saveToLocalFile,
  sendToEmail,
};

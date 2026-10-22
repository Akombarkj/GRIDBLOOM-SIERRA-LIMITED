import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

type LeadRecord = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  community: string;
  connectionType: string;
  load: string;
  message: string;
  createdAt?: string;
};

async function getLeads(): Promise<LeadRecord[]> {
  const filePath = path.join(process.cwd(), "data", "contact-submissions.json");

  try {
    const content = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default async function LeadsAdminPage() {
  const leads = await getLeads();

  return (
    <div className="admin-page">
      <section className="section admin-hero">
        <div className="section-inner admin-shell">
          <span className="section-kicker">GridBloom Admin</span>
          <h1>Connection leads</h1>
          <p>Recent connection requests submitted through the website.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          {leads.length === 0 ? (
            <div className="admin-empty-state">
              <h2>No leads yet</h2>
              <p>No connection requests have been received.</p>
            </div>
          ) : (
            <div className="admin-lead-list">
              {leads.map((lead) => (
                <article className="admin-lead-card" key={lead.id || `${lead.phone}-${lead.createdAt}`}>
                  <div className="admin-lead-head">
                    <div>
                      <span className="admin-label">Lead</span>
                      <h3>
                        {lead.firstName || "Unknown"} {lead.lastName || ""}
                      </h3>
                    </div>
                    <span className="admin-chip">{lead.connectionType || "Residential"}</span>
                  </div>

                  <dl className="admin-meta">
                    <div>
                      <dt>Phone</dt>
                      <dd>{lead.phone || "—"}</dd>
                    </div>
                    <div>
                      <dt>Community</dt>
                      <dd>{lead.community || "—"}</dd>
                    </div>
                    <div>
                      <dt>Estimated load</dt>
                      <dd>{lead.load || "—"}</dd>
                    </div>
                    <div>
                      <dt>Submitted</dt>
                      <dd>{lead.createdAt ? new Date(lead.createdAt).toLocaleString() : "—"}</dd>
                    </div>
                  </dl>

                  <div className="admin-message">
                    <span className="admin-label">Message</span>
                    <p>{lead.message || "No message provided."}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

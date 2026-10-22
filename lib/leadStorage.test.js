const test = require('node:test');
const assert = require('node:assert/strict');
const { buildLeadRecord } = require('./leadStorage.js');

test('buildLeadRecord normalizes submission data into Airtable-friendly fields', () => {
  const record = buildLeadRecord({
    firstName: '  Ada  ',
    lastName: 'Lovelace',
    phone: ' +232 123 4567 ',
    community: 'Freetown',
    connectionType: 'Residential',
    load: 'Lighting and basic appliances',
    message: 'Need power for my home',
  });

  assert.equal(record['First Name'], 'Ada');
  assert.equal(record['Last Name'], 'Lovelace');
  assert.equal(record['Phone'], '+232 123 4567');
  assert.equal(record['Community'], 'Freetown');
  assert.equal(record['Connection Type'], 'Residential');
  assert.equal(record['Estimated Load'], 'Lighting and basic appliances');
  assert.equal(record['Message'], 'Need power for my home');
});

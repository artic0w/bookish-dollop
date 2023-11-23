// database/seeders/InvoiceSeeder.js

'use strict';

const Factory = use('Factory');

class InvoiceSeeder {
  async run() {
    // Create 20 dummy invoices with client relationships
    const invoices = await Factory.model('App/Models/Invoice').createMany(20, (invoice, i) => {
      const clientId = i % 10 + 1; // Assign invoices to clients in a cyclic manner
      return { client_id: clientId };
    });

    console.log('Invoices seeded:', invoices.map(invoice => invoice.invoice_number));
  }
}

module.exports = InvoiceSeeder;

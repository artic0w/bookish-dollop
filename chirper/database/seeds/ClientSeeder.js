// database/seeders/ClientSeeder.js

'use strict';

const Factory = use('Factory');

class ClientSeeder {
  async run() {
    // Create 10 dummy clients with email addresses
    const clients = await Factory.model('App/Models/Client').createMany(10, (client, i) => {
      return { email: `client${i + 1}@example.com` };
    });

    console.log('Clients seeded:', clients.map(client => client.name));
  }
}

module.exports = ClientSeeder;

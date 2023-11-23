'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

// database/factory.js

const Factory = use('Factory');

Factory.blueprint('App/Models/Client', (faker) => {
  return {
    name: faker.username(),
    email: faker.email(),
    phone: faker.phone(),
    // Add more fields as needed
  };
});

Factory.blueprint('App/Models/Invoice', (faker) => {
  return {
    // Define fields for the Invoice model
    invoice_number: faker.integer({ min: 1000, max: 9999 }),
    amount: faker.floating({ min: 50, max: 500 }),
    // Add more fields as needed for the Invoice model

  };
});

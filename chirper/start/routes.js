'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Home Route
Route.get('/', 'HomeController.index').as('index');

// Invoice Routes
Route.resource('invoices', 'InvoiceController')
  .middleware(new Map([
    [['store', 'update', 'destroy'], ['auth']],
  ]))
  .validator(new Map([
    [['store', 'update'], 'Invoice'],
  ]));

// Client Routes
Route.resource('clients', 'ClientController')
  .middleware(new Map([
    [['store', 'update', 'destroy'], ['auth']],
  ]))
  .validator(new Map([
    [['store', 'update'], 'Client'],
  ]));

// Authentication Routes
Route.group(() => {
  Route.get('/login','AuthController.loginView').as('login.create')
  Route.post('/login-store','AuthController.postLogin').as('login.store')
  Route.post('logout', 'AuthController.logout').as('logout');
}).prefix('api/auth');

// Register Routes
Route.group(() => {
  Route.get('/register','AuthController.registrationView').as('register.create')
  Route.post('/register-store','AuthController.postRegister').as('register.store').validator('Register')
}).prefix('api/auth');

Route.group(() => {
  Route.get('/dashboard/home', 'DashboardController.home').as('dashboard.home');
  Route.get('/dashboard/settings', 'DashboardController.settings').as('dashboard.settings');
  Route.get('/dashboard/clients', 'DashboardController.clients').as('dashboard.clients');
  Route.get('/dashboard/invoices', 'DashboardController.invoices').as('dashboard.invoices');
  // Add more routes for other sections
}).middleware(['auth']);

// Serve static files
Route.get('/uploads/*', 'FileController.show').as('file.show');

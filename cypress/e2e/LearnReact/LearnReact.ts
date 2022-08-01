import { Given, When, Then, And, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given('a user {string} has been created with the following details:', (a: string, dt: DataTable) => {
  console.log(a, dt)
  console.log('Given a user "asdfasd" has been created with the following details:')
});

And('the user has browsed to the login page', () => {
  console.log('Given the user has browsed to the login page')
});

When('the user enters the following details in the login form:', () => {
  // TODO: implement step
  console.log('When the user enters the following details in the login form:')
});

When('the user logs in', () => {
  // TODO: implement step
  console.log('When the user logs in')
});

Then('the user {int} be redirected to the homepage', (should: number) => {
  // TODO: implement step
  console.log('Then the user {should} be redirected to the homepage', should)
  // console.log(dc)
});

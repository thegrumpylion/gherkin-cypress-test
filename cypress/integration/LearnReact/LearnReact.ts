// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I navigate to {string}', (a: string) => {
  cy.visit('/')
});

Then('I see a link {string}', (a: string) => {
  cy.get(".App-link").should("contain", "Learn React");
});

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I navigate to {string}', (a: string) => {
  cy.visit(a)
});

Then('I see a link {string}', (a: string) => {
  cy.get(".App-link").should("contain", a);
});

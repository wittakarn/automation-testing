import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on sign-up page', () => {
  cy.visit('https://thaisoftplus.com/ar/profile/#/sign-up');
});

When('I type first-name to field firstName', () => {
  cy.get('#firstName').type('first-name');
});

Then('I type last-name to field lastName', () => {
  cy.get('#lastName').type('last-name');
});

Then('I type email to field email', () => {
  cy.get('#email').type('email');
});

Then('I click submit button', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should see validation error', () => {
  cy.get('input:invalid').should('have.length.greaterThan', 1);
});
import { Given } from '@badeball/cypress-cucumber-preprocessor/steps';

Given('o usuário está na página de login', () => {
  cy.visit('https://www.saucedemo.com');
});

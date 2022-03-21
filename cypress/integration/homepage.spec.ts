/// <reference types="cypress" />

describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render properly', () => {
    cy.get('.navbar-brand').should('include.text', 'Hacker News');
  });

  it('should contain toggle theme', () => {
    cy.get('.container > .btn').click();
  });
});

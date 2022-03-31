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

  it('should open discussion', () => {
    cy.intercept('https://hacker-news.firebaseio.com/v0/newstories.json').as('newStories');
    cy.intercept('https://hacker-news.firebaseio.com/v0/item/*').as('item');
    cy.visit('/');
    cy.wait(['@newStories', '@item']);
    cy.get('[data-cy=discuss-button]').first().click();
    cy.url().should('include', 'discussion/');
  });
  it('should open modal', () => {
    cy.intercept('https://hacker-news.firebaseio.com/v0/item/*').as('item');
    cy.visit('/discussion/30868248');
    cy.wait(['@item']);
    cy.get('[data-cy=show-discussion-in-modal]').first().click();
    cy.get('[data-cy=modal]').should('exist');
  });
});

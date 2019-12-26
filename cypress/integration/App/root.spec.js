/// <reference types="Cypress" />

context('Root', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('.should() - Change the language', () => {
    cy.get('button')
      .first()
      .should('contain', 'en')
      .click();

    cy.get('button')
      .first()
      .should('contain', 'fr');
  });

  it('.should() - Have the previous language loaded', () => {
    cy.get('button')
      .first()
      .should('contain', 'en')
      .click();

    cy.get('button')
      .first()
      .should('contain', 'fr');

    cy.reload({ force: true });

    cy.get('button')
      .first()
      .should('contain', 'fr');
  });

  it('.should() - Have the correct title present', () => {
    cy.get('h1')
      .first()
      .should('contain', 'Page');
  });

  it('.should() - Have a link present and redirect', () => {
    cy.get('a')
      .first()
      .should('contain', 'Elements')
      .click();

    cy.location().should(location => {
      expect(location.pathname).to.eq('/elements');
    });

    cy.get('button')
      .first()
      .should('contain', 'en');
  });
});

describe('Meditation', () => {
  it('Opens a meditation', () => {
    cy.log('I open Home page');
    cy.visit('/').location('pathname').should('contain', 'home');

    cy.log('I open Meditations page');
    cy.get('ion-tab-button').eq(1).click();

    cy.log('I open a category');
    cy.get('app-category-card').first().click();

    cy.log('I open a meditation');
    cy.get('app-meditation-item').first().click();
  });
});

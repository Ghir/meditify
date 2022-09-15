describe('Timer', () => {
  it('Runs and stops the timer', () => {
    cy.log('I open the App');
    cy.visit('/')

    cy.log('I go to Timer page');
    cy.get('ion-tab-button').eq(2).click();

    cy.log('I set timer duration');
    cy.get('input[type=number]').clear().type('1')

    cy.log('I start timer');
    cy.get('.timer__start').click()

    cy.log('I pause');
    cy.get('.actions__icon').click()
  
    cy.log('I close timer');
    cy.get('.actions__finish')

    cy.log('I see the initial timer page');
    cy.get('.timer__start')
  });
});

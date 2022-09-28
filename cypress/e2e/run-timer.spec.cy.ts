describe('Timer', () => {
  it('Runs and stops the timer', () => {
    cy.log('I open the App');
    cy.visit('/')

    cy.log('I click on the Timer tab');
    cy.get('ion-tab-button').eq(2).click();

    cy.log('I go to stats page');
    cy.get('.selection__button').eq(1).click()

    cy.get('div.item').as('previousSessions')

    cy.log('I go to timer page');
    cy.get('.selection__button').eq(0).click()

    cy.log('I set timer duration');
    cy.get('input[type=number]').clear().type('1')

    cy.log('I start timer');
    cy.get('.timer__start').click()

    cy.log('I pause');
    cy.get('.actions__icon').click()
  
    cy.log('I close timer');
    cy.get('.actions__finish').children().eq(1).click()

    cy.log('I go back to stats page');
    cy.get('.selection__button').eq(1).click()

    cy.log('I see the saved session');
    cy.get('@previousSessions').then(count => {
      cy.get('div.item').should('have.length', count.length + 1)
    })
  });
});

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (){
    cy.get('#firstName').type('Salomão')
    cy.get('#lastName').type('Nogueira')
    cy.get('#email').type('salomao@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
})

describe('login_scenarios', () => {
    beforeEach( ()=> {
        cy.visit("https://demo.guru99.com/test/newtours/");

    })
    it('loginWithValidCredentials', async () => {
        cy.get("[name='userName']").type('username');
        cy.get("[name='userName']").should("exist");
        cy.get("input[name ='password']").type('password');
        cy.get("input[name ='submit']").click();
        cy.get("td h3").contains("Login Successfully")
    })
    it('loginWithInvalidCredentials', async () => {
        cy.get("[name='userName']").type('invalid_username');
        cy.get("[name='userName']").should("exist");
        cy.get("input[name ='password']").type('password');
        cy.get("input[name ='submit']").click();
        cy.get("td h3").should('not.exist');
    })

})
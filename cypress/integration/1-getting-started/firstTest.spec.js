
describe('happy_scenarios', () => {
    beforeEach( ()=> {
        cy.visit("https://demo.guru99.com/test/newtours/");

    })
    it('firstTest', async () => {
        cy.get("[name='userName']").type('Gemba');
        cy.get("[name='userName']").should("exist");
        cy.get("[name='userName']").should('have.value', "Gemba")
        //expect(cy.get("")).to.have("length",5)
        //expect(cy.get("")).not.have()
    })
    it('Test2', async () => {
        cy.get('input').each(t =>{
            console.log('test ************************',t.val());
           if (t.val()==='Submit'){
               expect(t.text()).eq('Submit');
           }
        })
        //expect(cy.get("")).to.have("length",5)
        //expect(cy.get("")).not.have()
    })
})
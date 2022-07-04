describe('Reset', () => {
    it('should click reset button', () => {
        // Start from the index page
        cy.visit('localhost:3005');

        // Find a link with an href attribute containing "about" and click it
        cy.contains('Reset').click();
    });
});

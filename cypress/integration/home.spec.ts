describe('Test suite at Home page', () => {
	it('Visitamos la pagina y nos logeamos correctamente', () => {
		cy.visit('https://www.saucedemo.com/')
		cy.get('#user-name').type('standard_user')
		cy.get('#password').type('secret_sauce')
		cy.get('#login-button').click()
		cy.get('.title').contains('Products')
	})
})

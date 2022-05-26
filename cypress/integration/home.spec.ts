describe('Test suite at Home page', () => {
	it('Visitamos la pagina y nos logeamos correctamente', () => {
		cy.visitHomePage()
		cy.fixture('homePageData').then(({ username, password }) => {
			cy.login(username, password)
		})
	})
})

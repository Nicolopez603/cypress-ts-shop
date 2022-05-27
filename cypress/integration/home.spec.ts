describe('Test suite at Home page', () => {
	it('Visit the page and login correctly.', () => {
		cy.visitHomePage()
		cy.fixture('homePageData').then(({ username, password }) => {
			cy.login(username, password)
		})
	})
})

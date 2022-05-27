describe('Test Suite at the cart', () => {
	it('Visit the cart and validating elements', () => {
		cy.visitHomePage()
		cy.fixture('homePageData').then(({ username, password }) => {
			cy.login(username, password)
		})
		cy.addingProducts()
		cy.cart()
	})
})

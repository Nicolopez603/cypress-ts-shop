describe('Test Suite at checkout: information', () => {
	it('Visit the page checkout: information and validating elements', () => {
		cy.visitHomePage()
		cy.fixture('homePageData').then(({ username, password }) => {
			cy.login(username, password)
		})
		cy.addingProducts()
		cy.cart()
		cy.fixture('checkoutInformationData').then(
			({ firstname, lastname, postalcode }) => {
				cy.checkoutInformation(firstname, lastname, postalcode)
			}
		)
	})
})

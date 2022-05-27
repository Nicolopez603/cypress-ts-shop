describe('Test Suite at checkout: overview', () => {
	it('Visit the page checkout:overview and validating elements', () => {
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
		cy.checkoutOverview()
	})
})

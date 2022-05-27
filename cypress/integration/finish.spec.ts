describe('Test Suite at the finish page', () => {
	it('Visit the finish page and validating elements', () => {
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
		cy.finish()
	})
})

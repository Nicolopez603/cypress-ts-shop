declare namespace Cypress {
	interface Chainable {
		/**
		 * Navigate to the homepage
		 */
		visitHomePage(): Chainable<Element>
	}
}

Cypress.Commands.add('visitHomePage', () => {
	cy.visit('https://www.saucedemo.com/')
})


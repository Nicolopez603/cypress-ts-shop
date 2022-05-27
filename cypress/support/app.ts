declare namespace Cypress {
	interface Chainable {
		/**
		 * Navigate to the homepage
		 */
		visitHomePage(): Chainable<Element>
		/**
		 * Navigate to the Inventory Page
		 */
		visitProductsPage(): Chainable<Element>
		/**
		 * Navigate to the Cart Page
		 */
		visitCartPage(): Chainable<Element>
		/**
		 * Navigate to the Checkout Page
		 */
		visitCheckoutPage(): Chainable<Element>
		/**
		 * Navigate to the Overview Page
		 */
		visitOverviewPage(): Chainable<Element>
		/**
		 * Navigate to the Finish Page
		 */
		visitFinishPage(): Chainable<Element>
	}
}

Cypress.Commands.add('visitHomePage', () => {
	cy.visit('https://www.saucedemo.com/')
})

Cypress.Commands.add('visitProductsPage', () => {
	cy.visit('https://www.saucedemo.com/inventory.html')
})

Cypress.Commands.add('visitCartPage', () => {
	cy.visit('https://www.saucedemo.com/cart.html')
})

Cypress.Commands.add('visitCheckoutPage', () => {
	cy.visit('https://www.saucedemo.com/checkout-step-one.html')
})

Cypress.Commands.add('visitOverviewPage', () => {
	cy.visit('https://www.saucedemo.com/checkout-step-two.html')
})

Cypress.Commands.add('visitFinishPage', () => {
	cy.visit('https://www.saucedemo.com/checkout-complete.html')
})

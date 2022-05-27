declare namespace Cypress {
	interface Chainable {
		/**
		 * @param username - takes username or id
		 * @param password - takes user password
		 */
		login(username: string, password: string): Chainable<Element>
		/**
		 * Adding products to validate correct operation
		 */
		addingProducts(): Chainable<Element>
		/**
     * Clicking in the cart
     * and
		 * Clicking in the button 'Checkout'
		 */
		cart(): Chainable<Element>
	}
}

Cypress.Commands.add('login', (username, password) => {
	cy.get('#user-name').type(username)
	cy.get('#password').type(password)
	cy.get('#login-button').click()
})

Cypress.Commands.add('addingProducts', () => {
	cy.get('#add-to-cart-sauce-labs-backpack').click()
	cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
})

Cypress.Commands.add('cart', () => {
  cy.get('.shopping_cart_link').click()
  cy.get('#checkout').click()
})
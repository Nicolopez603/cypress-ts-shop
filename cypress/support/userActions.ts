declare namespace Cypress {
	interface Chainable {
		/**
		 * @param username - takes username or id
		 * @param password - takes user password
		 */
		login(username: string, password: string): Chainable<Element>
		addingProducts(): Chainable<Element>
	}
}

Cypress.Commands.add('login', (username, password) => {
	cy.get('#user-name').type(username)
	cy.get('#password').type(password)
	cy.get('#login-button').click()
})

Cypress.Commands.add('addingProducts',() => {
  cy.get('#add-to-cart-sauce-labs-backpack').click()
  cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
})

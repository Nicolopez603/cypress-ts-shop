declare namespace Cypress {
	interface Chainable {
		/**
		 * @param username - takes username
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
		/**
		 * @param firstname - takes first name
		 * @param lastname - takes last name
		 * @param postalcode - takes postal code
		 */
		checkoutInformation(
			firstname: string,
			lastname: string,
			postalcode: string
		): Chainable<Element>
    /*
    *
     */
		checkoutOverview(): Chainable<Element>
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

Cypress.Commands.add(
	'checkoutInformation',
	(firstname, lastname, postalcode) => {
		cy.get('#first-name').type(firstname)
		cy.get('#last-name').type(lastname)
		cy.get('#postal-code').type(postalcode)
		cy.get('#continue').click()
	}
)

Cypress.Commands.add('checkoutOverview',()=>{
  cy.get('.title').should('contain.text', 'Checkout: Overview').and('be.visible')
  cy.get('.summary_info > :nth-child(1)').should('be.visible')
  cy.get('.summary_info > :nth-child(3)').should('be.visible')
  cy.get('#finish').click()
})

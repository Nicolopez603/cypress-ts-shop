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
		/**
		 *
		 */
		finish(): Chainable<Element>
	}
}

Cypress.Commands.add('login', (username, password) => {
	cy.get('.login_logo').should('be.visible')
	cy.get('.bot_column').should('be.visible')
	cy.get('#user-name').type(username)
	cy.get('#password').type(password)
	cy.get('#login-button').click()
	cy.get('.title').should('contain.text', 'Products')
	cy.get('.app_logo').should('be.visible')
})

Cypress.Commands.add('addingProducts', () => {
	cy.get('#add-to-cart-sauce-labs-backpack').click()
	cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
	cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').should(
		'be.visible'
	)
})

Cypress.Commands.add('cart', () => {
	cy.get('.shopping_cart_link').click()
	cy.get('.title').should('contain.text', 'Your Cart')
	cy.get('.cart_desc_label').should('contain.text', 'DESCRIPTION')
	cy.get(':nth-child(3) > .cart_quantity').should('be.visible')
	cy.get(':nth-child(4) > .cart_quantity').should('be.visible')
	cy.get('#checkout').click()
})

Cypress.Commands.add(
	'checkoutInformation',
	(firstname, lastname, postalcode) => {
		cy.get('.header_secondary_container')
			.should('be.visible')
			.and('contain.text', 'Checkout: Your Information')
		cy.get('#first-name').should('have.attr', 'placeholder', 'First Name')
		cy.get('#first-name').type(firstname)
		cy.get('#last-name').should('have.attr', 'placeholder', 'Last Name')
		cy.get('#last-name').type(lastname)
		cy.get('#postal-code').should(
			'have.attr',
			'placeholder',
			'Zip/Postal Code'
		)
		cy.get('#postal-code').type(postalcode)
		cy.get('#continue').click()
	}
)

Cypress.Commands.add('checkoutOverview', () => {
	cy.get('.title')
		.should('contain.text', 'Checkout: Overview')
		.and('be.visible')
	cy.get('.summary_info > :nth-child(1)').should('be.visible')
	cy.get('.summary_info > :nth-child(3)').should('be.visible')
	cy.get('#finish').click()
})

Cypress.Commands.add('finish', () => {
	cy.get('.title').should('contain.text', 'Checkout: Complete')
	cy.get('.complete-header').should(
		'contain.text',
		'THANK YOU FOR YOUR ORDER'
	)
	cy.get('.pony_express').should('be.visible')
})

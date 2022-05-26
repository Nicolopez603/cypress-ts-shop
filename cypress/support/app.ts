declare namespace Cypress {
	interface Chainable {
		visitHomePage(): Chainable<Element>
		visitProductsPage(): Chainable<Element>
		visitCartPage(): Chainable<Element>
		visitCheckoutPage(): Chainable<Element>
		visitOverviewPage(): Chainable<Element>
		visitFinishPage(): Chainable<Element>
	}
}

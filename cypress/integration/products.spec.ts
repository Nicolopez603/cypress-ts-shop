describe('Test Suite at Inventory',()=>{
  it('Visit the inventory and adding products',()=>{
    cy.visitHomePage()
		cy.fixture('homePageData').then(({ username, password }) => {
			cy.login(username, password)
		})
    cy.addingProducts()
  })
})
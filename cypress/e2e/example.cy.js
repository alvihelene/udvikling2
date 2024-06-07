describe('Renders website', () => {
  it('Visits the website', () => {
    cy.request('http://localhost:5173').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Checks status code', () => {
    cy.request('http://localhost:5173').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Test navigation', () => {
    cy.visit('http://localhost:5173')
    cy.get('a').contains('About').click()
    cy.url().should('include', '/about')
  })
})

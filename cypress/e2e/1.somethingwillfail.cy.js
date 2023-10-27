describe('Something will fail', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get("[data-cy=nothing]").click();
  })
})
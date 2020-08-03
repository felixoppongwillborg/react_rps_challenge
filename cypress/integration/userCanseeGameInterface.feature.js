describe("User can display game page", () => {
  it ('user can see game interface', () => {
  cy.visit("localhost:3000");
  cy.get("#title").should('contain', 'Rock Paper Scissors');
  cy.get("#rock").should('contain', 'Rock');
  cy.get("#paper").should('contain', 'Paper');
  cy.get("#scissors").should('contain', 'Scissors');
  })
})
describe('Computer picks rock', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000", {

      onBeforeLoad: winner => {
        cy.stub(winner.Math, 'floor').returns(0)
      }
    })
  })
  it('user picks rock game is Tied', () => {
    cy.get("#rock").click();
    cy.get("#result").should('contain', 'Tie')
  })

  it('user picks paper you win', () => {
    cy.get("#paper").click();
    cy.get("#result").should('contain', 'You Win')
  })

  it('user picks paper equals a lost', () => {
    cy.get("#scissors").click();
    cy.get("#result").should('contain', 'You Lose')
  });
})
describe('when computer picks paper', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000", {

      onBeforeLoad: winner => {
        cy.stub(winner.Math, 'floor').returns(1)
      }
    })
    it('user picks paper game is Tied', () => {
      cy.get("#paper").click();
      cy.get("#result").should('contain', 'Tie')
    })

    it('user picks paper you win', () => {
      cy.get("#scissors").click();
      cy.get("#result").should('contain', 'You Win')
    })

    it('user picks paper you lose', () => {
      cy.get("#rock").click();
      cy.get("#result").should('contain', 'You Lose')
    })
  })
  describe('when computer picks scissors', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000", {

        onBeforeLoad: winner => {
          cy.stub(winner.Math, 'floor').returns(2)
        }
      })
      it('user picks scissors game is Tied', () => {
        cy.get("#scissors").click();
        cy.get("#result").should('contain', 'Tie')
      })

      it('user picks scissors you win', () => {
        cy.get("#rock").click();
        cy.get("#result").should('contain', 'You Win')
      })

      it('user picks paper you lose', () => {
        cy.get("#paper").click();
        cy.get("#result").should('contain', 'You Lose')
      })
    })
  })
})

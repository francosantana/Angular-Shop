const API = "https://dummyjson.com/"

describe('Posts page ', () => {

  beforeEach(()=>{
    cy.intercept('GET', API+'posts', { fixture: 'posts.json' }).as('getData');
    cy.visit('/posts')
    cy.wait("@getData") 
  })
  
  //Filtered should have 0 and AllPosts have all
  it('Posts init correctly', () => {
    cy.get('[data-test="allPosts"]').find('[data-test="post-container"]').should('have.length', 30)
    cy.get('[data-test="allPostsFiltered"]').find('[data-test="post-container"]').should('have.length', 0)
  })

  it('Search posts have correct amount of posts based on the input ', ()=>{
    cy.get('[data-test="searchInput"]').type("cook")
    cy.get('[data-test="allPostsFiltered"]').find('[data-test="post-container"]').should('have.length', 1)
    cy.get('[data-test="searchInput"]').clear().type("life")
    cy.get('[data-test="allPostsFiltered"]').find('[data-test="post-container"]').should('have.length', 7)
    cy.get('[data-test="searchInput"]').clear().type("job")
    cy.get('[data-test="allPostsFiltered"]').find('[data-test="post-container"]').should('have.length', 1)
  
  })


})

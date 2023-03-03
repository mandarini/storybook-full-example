describe('rlv3: Rlv3 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rlv3--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Rlv3!');
    });
});

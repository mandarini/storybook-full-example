describe('rlv1: Rlv1 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rlv1--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Rlv1!');
    });
});

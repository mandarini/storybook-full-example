describe('rlv2: Rlv2 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rlv2--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Rlv2!');
    });
});

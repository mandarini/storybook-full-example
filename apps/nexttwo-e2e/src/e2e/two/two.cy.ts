describe('nexttwo: Two component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=two--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Two!');
    });
});

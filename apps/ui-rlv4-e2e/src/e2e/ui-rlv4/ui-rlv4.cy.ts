describe('ui-rlv4: UiRlv4 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uirlv4--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UiRlv4!');
    });
});

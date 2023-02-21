describe('ngapp-ts', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('sbmigrat-root').should('exist');
  });
});

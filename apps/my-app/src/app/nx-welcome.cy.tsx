import NxWelcome from './nx-welcome';

describe('Have fun', () => {
  it('should work', () => {
    cy.mount(<NxWelcome title="Nx" />);
    cy.get('#welcome').should('contain.text', 'Welcome');
  });
});

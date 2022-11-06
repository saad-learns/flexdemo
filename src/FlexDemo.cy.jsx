import FlexDemo from './FlexDemo';
import '@testing-library/cypress/add-commands';

describe('<FlexDemo>', () => {
  it('should switch tab when clicking tab title', () => {
    cy.mount(<FlexDemo />);
    cy.findByText('Panel Three').should('not.exist');
    cy.findByText('Three').click();
    cy.findByText('Panel Three').should('exist').should('be.visible');
  });
});

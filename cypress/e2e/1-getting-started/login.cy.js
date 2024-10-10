describe('Login Form', () => {

    beforeEach(() => {
      // Visit the page containing the login form
      cy.visit('http://localhost:3000');
    });
  
    it('should show an error message if username or password is empty', () => {
      cy.get('button[type="submit"]').click();
        cy.get('#loginMessage').should('exist'); // Make sure the element exists in the DOM
        cy.get('#loginMessage')
        .should('be.visible') // Make sure the element is visible
        .and('contain', 'Please enter both username and password.');
    });
  
    it('should login successfully with correct credentials', () => {
      cy.get('#username').type('admin');
      cy.get('#password').type('123456');
        cy.get('button[type="submit"]').click();
        cy.get('#loginMessage').should('exist');
  
      cy.get('#loginMessage')
        .should('be.visible')
        .and('contain', 'Login successful!');
    });
  
    it('should show an error message for invalid credentials', () => {
      cy.get('#username').type('wrongUsername');
      cy.get('#password').type('wrongPassword');
        cy.get('button[type="submit"]').click();
        cy.get('#loginMessage').should('exist');
  
      cy.get('#loginMessage')
        .should('be.visible')
        .and('contain', 'Invalid username or password.');
    });
  });
  
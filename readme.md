Preparation before starting testing 
https://github.com/Adindaprl/Login-Functionality-Testing.git
1. Clone the project, make sure to save in the correct directory.
2. Make sure node js and npm are installed, do this by commands "node -v" and "npm -v". You can try by CMD or by terminal
3. Npm install and run
4. Open http://localhost:3000 and you will see bellow login page
   
Set cypress 

1. You can do npm install cypress --save-dev or just npm install cypress
2. Open the cypress, if you got an error run Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass and run back  the cypress.
3. Choose e2e testing
4. Choose a browser
5. Create files inside cypress/e2e/1-getting-started/login.cy.js
Create code that converted into e2e cypress form with some tasks that will be executed by cypress.

Create test cases to validate the login functionality based on the following scenarios:
   - Positive test case: Should login successfully with valid credentials.
   - Negative test case: Should display error message when login with invalid credentials.
   - Boundary test case: Should display error message when login with empty credentials.

  The correct login credentials are:
   - Username: admin
   - Password: 123456

6. Go back to Cypress Chrome and select the file you created.
7. Cypress automates testing your code, if you get an error, fix it until the Specs iis completely correct.


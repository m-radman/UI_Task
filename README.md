# QA AUTOMATION UI TASK  
  
## Task Requirements  

The application under test: https://demoqa.com/

### Objectives:  
 - At the [webtables page](https://demoqa.com/webtables) do the following, add new record in the table (positive and few negative cases), edit existing table record
 - At the [practice form page](https://demoqa.com/automation-practice-form) submit a valid form (all fields inserted) and validate submitted data
 - At the [progress bar page](https://demoqa.com/progress-bar) validate progress bar is working correctly  
   
  
## Solution  
 - The implementation of webtables tests is available [here](https://github.com/m-radman/UI_Task/blob/main/cypress/e2e/tests/tableTests.cy.js)  
 - The implementation of practice form test is available [here](https://github.com/m-radman/UI_Task/blob/main/cypress/e2e/tests/practiceFormTest.cy.js)  
 - The implementation of progress bar tests is available [here](https://github.com/m-radman/UI_Task/blob/main/cypress/e2e/tests/progressBarTests.cy.js)  
 - Closer look at page objects is available [here](https://github.com/m-radman/UI_Task/tree/main/cypress/e2e/pages)  
   
## How to run tests  
To run tests locally please follow the steps:  
  
  - `Step1` Clone this repository to your local machine
    > git clone https://github.com/m-radman/UI_Task.git
  - `Step2` Install dependencies
    > npm install
  - `Step3` Running Cypress tests 
    - To open Cypress and run tests from the browser 
        > npm run cy:open
    - To run all tests in `headless` mode
        > npm run cy:run
    - To run single test file:  
       - run the webtables tests  
         > npm run cy:run:tables  
       - run the practice form test  
         > npm run cy:run:form  
       - run the progress bar tests  
         > npm run cy:run:progbar 

@ImportAccounts
Feature: Import Accounts

  @Functional @Positive
  Scenario: Navigate to the Import Accounts page
    Given  User logs in with valid credentials
    When the user navigates to the SuiteCRM Import Accounts page
    Then the user should be on the SuiteCRM Import Accounts page

  @Functional @Positive
  Scenario: Successfully upload a valid import file and proceed
    Given the user is on the SuiteCRM Import Accounts page
    When the user uploads a valid accounts data file and clicks the next button
    Then the system proceeds to the Confirm Import File Properties page
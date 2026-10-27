@CreateAccounts
Feature: Accounts and Create Account

  @Functional @Positive
  Scenario: Verify Accounts dropdown is displayed with all quick actions
    Given User logs in with valid credentials
    When User places the mouse on the Accounts module in the navigation bar
    Then User should see all quick actions under the Accounts module
  @Functional @Positive
  Scenario: Navigate to the Create Account page
    Given User logs in with valid credentials
    When User clicks the Create Account quick action under the Accounts module
    Then The Create Account page should be displayed


  @Functional @Positive
  Scenario: Create an account using NAME, WEBSITE, and OFFICE PHONE from JSON
    Given User should be on the Create Account page
    When User enters account details from JSON and clicks the Save button
    Then The account should be created with the entered NAME, WEBSITE, and OFFICE PHONE

  @Functional @Negative
  Scenario Outline: Verify NAME is mandatory
    Given User should be on the Create Account page
    When User leaves the NAME field empty and clicks the Save button
    Then The error message "<ErrorMessage>" should be displayed below the NAME field

    Examples:
      | ErrorMessage                  |
      | Missing required field: Name |

  @Functional @Positive
  Scenario Outline: Verify the Email field with invalid format 
    Given User should be on the Create Account page
    When User enters the email from "<TestData>"
    Then The Email field should throw error message if the email format is invalid.


    Examples:
      | TestData  |
      |InValidEmail |

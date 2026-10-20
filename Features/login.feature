@LoginPage
Feature: Login Page Validation

  @NonFunctional @Positive
  Scenario Outline: Verify login page components visibility
    Given User should be in SuiteCRM URL page
    When User launches the browser and enters SuiteCRM URL
    Then User should be able to see "<Element>"

    Examples:
      | Element        |
      | SuiteCRM Logo  |
      | Username field |
      | Password field |
      | Login button   |

  @Functional @Positive
  Scenario Outline: Verify login with valid credentials
    Given User should be in SuiteCRM URL page
    When User logs in using test data "<TestData>"
    Then User should be able to login

    Examples:
      | TestData |
      | ValidUser |

  @Functional @Negative
  Scenario Outline: Verify login validation with invalid and empty credentials
    Given User should be in SuiteCRM URL page
    When User logs in using test data "<TestData>"
    Then An error message "<ErrorMessage>" should be displayed

    Examples:
      | TestData         | ErrorMessage                                 |
      | InvalidUser      | Login Credentials incorrect,pleasetry again |
      | EmptyUsername    | missing required field                       |
      | EmptyPassword    | missing required field                       |
      | EmptyCredentials | missing required field                       |
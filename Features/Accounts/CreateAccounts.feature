@Accounts
Feature: Accounts and Create Account

  @Functional @Positive
  Scenario Outline: Verify login and Accounts quick actions
    Given User should be in SuiteCRM URL page
    When User logs in using valid credentials and opens the Accounts module
    Then User should see the "<Page>" and the "<QuickAction>" quick action

    Examples:
      | Page      | QuickAction     |
      | Home page | Create Account  |
      | Home page | View Accounts   |
      | Home page | Import Accounts |

  @Functional @Positive
  Scenario: Navigate to the Create Account page
    Given User should be on the home page
    When User clicks the Create Account quick action under the Accounts module
    Then The Create Account page should be displayed

  
  @Functional @Positive
  Scenario Outline: Create an account using NAME, WEBSITE, and OFFICE PHONE
    Given User should be on the Create Account page
    When User enters the account details:
      | Field        | TestData             |
      | NAME         | <NameTestData>       |
      | WEBSITE      | <WebsiteTestData>    |
      | OFFICE PHONE | <OfficePhoneTestData> |
    When User clicks the Save button
    Then The account should be created with the entered NAME, WEBSITE, and OFFICE PHONE

    Examples:
      | NameTestData | WebsiteTestData | OfficePhoneTestData |
      | AccountName  | AccountWebsite  | AccountOfficePhone  |

  @Functional @Negative
  Scenario Outline: Verify NAME is mandatory
    Given User should be on the Create Account page
    When User leaves the NAME field empty and clicks the Save button
    Then The error message "<ErrorMessage>" should be displayed below the NAME field

    Examples:
      | ErrorMessage                  |
      | Missing required field: Name |

  @Functional @Positive
  Scenario Outline: Verify the Email field accepts a valid address
    Given User should be on the Create Account page
    When User enters the email from "<TestData>"
    Then The Email field should accept the address

    Examples:
      | TestData  |
      | ValidEmail |
                        

  

         
  
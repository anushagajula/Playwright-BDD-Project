@ViewAccounts
Feature: View Accounts

  @Functional @Positive
  Scenario Outline: View all account details
    Given  User logs in with valid credentials
    When User clicks the View Accounts quick action
    Then User should be able to view all <AccountDetails>

    Examples:
      | AccountDetails |
      | account details |




  
  @Functional @Positive
   Scenario: Verify that the user can search for an account by account name
    Given the user is on the View Account page
    When the user clicks the Filter button, enters the account name in the Name field on the Filter page, and clicks the Search button
    Then the user should be able to see the account with the specified account name in the search results

<<<<<<< HEAD
  


=======
  
>>>>>>> 8704396 (added accounts,login page)

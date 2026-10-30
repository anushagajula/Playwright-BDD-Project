@HomePage
Feature: Home Page

  @Functional @Positive
  Scenario Outline: Verify Home page elements are displayed
    Given User is logged into SuiteCRM
    When User views the Home page
    Then User should be able to see "<Element>" on the Home page

    Examples:
      | Element             |
      | Edit Profile icon   |
      | SUITECRM DASHBOARD  |
      | Action dropdown     |
      | My Calls            |
      | My Activity Stream  |

  @Functional @Positive
  Scenario Outline: Verify the user can log out successfully
    Given "<User>" is logged into SuiteCRM
    When User navigates to Edit Profile then clicks the Logout button
    Then User should be able to log out of SuiteCRM successfully

    Examples:
      | User             |
      | Valid user       |
@Accounts
Feature: View Accounts

  @Functional @Positive
  Scenario Outline: View all account details
    Given User should be on the Home page after successful login
    When User clicks the View Accounts quick action
    Then User should be able to view all <AccountDetails>

    Examples:
      | AccountDetails |
      | account details |

  @Functional @Positive
  Scenario Outline: Verify the default number of displayed account records
    Given User should be on the Home page after successful login
    When User clicks the View Accounts quick action
    Then User should see <DisplayedCount> accounts in the current list view

    Examples:
      | DisplayedCount |
      | 20             |

  @Functional @Positive
  Scenario Outline: Verify the total number of account records
    Given User should be on the Home page after successful login
    When User clicks the View Accounts quick action
    Then User should see a total account count of <TotalCount>

    Examples:
      | TotalCount |
      | 50         |

  
  @Functional @Positive
  Scenario Outline: Search for an account using the Search button
    Given User should be on the Home page after successful login
    When User clicks the View Accounts quick action, enters "<AccountName>", and clicks the Search button
    Then User should be on the View Accounts page and be able to view the account "<AccountName>"

    Examples:
      | AccountName |
      | Test Account |

  @Functional @Positive
  Scenario Outline: Navigate to additional account records
    Given User should be on the Home page after successful login
    When User clicks the View Accounts quick action and clicks the Next Page arrow button
    Then User should see accounts <FirstRecord>-<LastRecord> out of a total of <TotalCount> accounts

    Examples:
      | FirstRecord | LastRecord | TotalCount |
      | 21          | 40         | 50         |

  @Functional @Positive
  Scenario Outline: Verify the Insights button is displayed
    Given User should be on the Home page after successful login
    When User clicks the View Accounts quick action
    Then User should be able to see the <Button> button

    Examples:
      | Button   |
      | Insights |

  @Functional @Positive
  Scenario Outline: View the Insights chart summary panel
    Given User should be on the Home page after successful login
    When User clicks the View Accounts quick action and clicks the Insights button
    Then User should be on the View Accounts page and be able to see the <Panel> panel

    Examples:
      | Panel         |
      | chart summary |
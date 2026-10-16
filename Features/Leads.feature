@lead
Feature: Leads

  Scenario: Verify user can see Leads drop down with options
    Given user is on Home page
    When User mouse hover on Leads 
    Then User should see the following options in the Leads dropdown:
      | Leads drop down options |
      | Create Lead             |
      | Create Lead from vCard  |
      | View Leads              |
      | Import Leads            |

 Scenario Outline: Verify user navigates to the selected Leads page
    Given user is on Home page
    When user clicks "<name>"
    Then user should be redirected to the "<page>" page

    Examples:
      | name                   | page                    |
      | Create Lead            | Create Lead             |
      | Create Lead from vCard | Create Lead from vCard  |
      | View Leads             | View Leads              |
      | Import Leads           | Import Leads            |

 Scenario: Verify user can see Leads page with features
    Given user is on Leads page
    When User views features
    Then user should see the following features in the Leads page:
      | features        |
      | Overview        |
      | more information|
      | other           |
      | save            |
      |cancel           |

@negative
Scenario: Verify user able to create Lead with empty fields
    Given user is on Create Lead page
    When user clicks on Save button without entering any details
    Then User able to see error message "Missing required field: Last Name"
@negative
Scenario Outline: Verify user able to create Lead with invalid details
    Given user is on Create Lead page
    When user clicks on Save button by entering "<fieldname>"
    Then User able to see error message "<message>"

    Examples:
      | fieldname                           | message                    |
      | invalid Email                       | Invalid email format. Expected: 'example@example.org' |
      | invalid Mobile                      | Invalid phone format. |
      | invalid Office Phone                |Invalid phone format.  |
@positive
Scenario: Verify user can create a Lead with valid mandatory fields
    Given user is on Create Lead page
    When user clicks on Save button by entering valid data in all mandatory fields
    Then user should be redirected to the View Leads page
    





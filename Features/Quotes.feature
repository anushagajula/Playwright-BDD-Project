@Quote
Feature: Manage Quotes
    Scenario: Verify user can see Quotes drop down with options
        Given user is on Home page
        When User mouse hover on Quotes 
        Then User should see the following options in the Quotes dropdown is Displayed:
        | Quotes drop down options |
        | Create Quote             |
        | View Quotes              |
        | Import                   |
        |Import Line Items         |
    
    Scenario Outline: Verify user navigates to the selected Quotes page
        Given user is on Home page
        When User clicks "<name>" on Quotes drop down
        Then user should be redirected to the "<page>" Page 
    
        Examples:
        | name                   | page                    |
        | Create Quote           | Create Quote            |
        | View Quotes            | View Quotes             |
        | Import                 | Import Quotes           |
        |Import Line Items       | Import Line Items       |

    Scenario: Verify user can see Create Quote page with features
    Given user is on Create Quote page
    When User views features on Create Quote page
    Then user should see the following features in the Create Quote page is Displayed:
      | features        |
      | Overview        |
      | Address information|
      | Line Items      |
      | save            |
      |cancel           |
    
    @negative
Scenario: Verify user able to create Quote with empty fields
    Given user is on Create Quote page
    When user clicks on Save button without entering any details
    Then user able to see error message "Missing required field: Title"
    
@negative
Scenario Outline: Verify user able to create Quote with invalid details
    Given user is on Create Quote page
    When user clicks on Save button by entering "<fieldname>" on Create Quote page
    Then user able to see error message "<message>"

    Examples:
      | fieldname                           | message                    |
      | invalid Valid until                 | Invalid Value: Valid Until |
      | invalid Title                      | Missing required field: Title |
      
@positive
Scenario: Verify user can create a Quote with valid mandatory fields
    Given user is on Create Quote page
    When user clicks on Save button by entering valid data in all mandatory fields
    Then user should be redirected to the new Quote record page with features

Scenario: Verify user able to see popup to cancel Quote with valid details
    Given user is on Create Quote page
    When user clicks on Cancel button by entering valid data in all mandatory fields
    Then User able to see popup to cancel Quote creation

Scenario: Verify user able to cancel Quote creation
    Given user is on Create Quote page with popup to cancel Quote creation
    When user clicks on Leave button in the popup
    Then user should be redirected to the View Quotes page

Scenario: Verify user able to edit new Quote record fields
    Given user is on new Quote record page
    When user clicks on Edit button
    Then User able to update new Quote record fields

Scenario: Verify user able to  see options on actions drop down of new Quote record page
    Given user is on new Quote record with actions dropdown
    When user clicks on actions drop down
    Then User able to see the following options in the actions drop down of new Quote record page:
      | Actions drop down options |
      | Edit                      |
      | Duplicate                 |
      | Delete                    |
      | Convert to invoice             |
      | Print as PDF              |
      |Email PDF                  |
      | Find Duplicates           |
      | View Change Log           |
      | Create Contract   |
      |Create Opportunity   |

Scenario: Verify user able to delete new Quote record
    Given user is on new Quote record with actions dropdown
    When user clicks on Delete option 
    Then User able to see popup to delete Quote record

Scenario: Verify user able to view change log of new Quote  record
    Given user is on new Quote record with actions dropdown
    When user clicks on View Change Log option 
    Then User able to see change log of the new Quote record
    
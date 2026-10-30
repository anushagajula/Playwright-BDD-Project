@Quote @authenticated
Feature: Manage Quotes

   @quotesdropdown
    Scenario: Verify user can see Quotes drop down with options
        Given user is on Home page
        When User mouse hover on Quotes 
        Then User should see the following options in the Quotes dropdown is Displayed:
        | Quotes drop down options |
        | Create Quote             |
        | View Quotes              |
        | Import                   |
        |Import Line Items         |

    @quotesnavigation
    Scenario Outline: Verify user navigates to the selected Quotes page
        Given user is on Home page
        When User clicks "<name>" on Quotes drop down
        Then user should be redirected to the "<page>" Page 
    
        Examples:
        | name                   | page                    |
        | Create Quote           | Create Quote            |
        | View Quotes            | View Quotes             |
        | Import                 | Import           |
        |Import Line Items       | Import Line Items       |

    @createquote
    Scenario: Verify user can see Create Quote page with features
    Given user is on Create Quote page
    When User views features on Quote page
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
    When User clicks on Save button without entering any details
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
@cancelquotecreation
Scenario: Verify user can cancel Quote creation after entering valid details
    Given user is on Create Quote page
    When user clicks on Cancel button by entering valid data in all mandatory fields
    Then user should be redirected to the View Quotes page
@editquote
Scenario: Verify user able to edit new Quote record fields
    Given user is on new Quote record page
    When user clicks on Edit button
    Then User able to update new Quote record fields
@actionsdropdownforquote
Scenario: Verify user able to  see options on actions drop down of new Quote record page
    Given user is on new Quote record with actions dropdown
    When user opens the actions drop down on Quote record
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

@viewchangelogquote
Scenario: Verify user able to view change log of new Quote  record
    Given user is on an updated Quote record page
    When user opens the View Change Log for Quote
    Then user should see the updated Quote title in the change log
@deletequote
Scenario: Verify user able to delete new Quote record
    Given user is on new Quote record with actions dropdown
    When user selects Delete for the Quote record
    Then User able to see popup to delete Quote record
@viewquotesfeatures
Scenario: verify user able to see features on View Quotes page
    Given user is on View Quotes page
    When User views features on Quotes page
    Then user should see the following features in the View Quotes page:
      | features        |
      | Num       |
      | Title          |
      | Quote Stage          |
      | filter            |
      | Contacts           |
      | Valid Until           |
      | Account |
      |Grand Total|
@quotebulkactiondropdown
Scenario: Verify User able to see Bulk Action drop down on View Quotes page
    Given user is on View Quotes page with a Quote record
    When User opens the Bulk Action drop down on Quotes page
    Then User able to see the following options in the Bulk Action drop down on Quotes page:
      | Bulk Action drop down options |
      | Delete                        |
      | Merge                         |
      | Mass Update                   |
      |Export                         |
@filternavigation
Scenario: Verify user can filter Quotes records
    Given user is on View Quotes page 
    When User clicks on Filter on Quotes page
    Then User should see filter options to filter quotes records
@titleinfilter
Scenario: Verify user can enter Title in the filter
    Given user is on the View Quotes page with filter options
    When user enters a title in the filter
    Then title should be displayed in the filter field
@filterquotebytitle
Scenario: Verify user can filter Quotes records by Title
    Given user is on View Quotes page with specified title on filter options
    When user clicks the Quote filter search button
    Then User should see quotes records matching the specified title
@importquotewithvalidfile
Scenario: Verify user can import a valid csv file  with choose file button
    Given User is on  import page 
    When User clicks choose file button with valid csv file
    Then User should see selected Quote CSV file on import page
@importquotewithinvalidfile
Scenario: Verify user imported with invalid file
    Given User is on  import page 
    When User clicks choose file button with invalid file
    Then User should see the CSV import file properties error
@importquotewithnofile
Scenario: Verify user imported with no file
    Given User is on  import page 
    When User clicks next button
    Then User should see error message "Missing required fields: Select a file to upload."

@recentviewedquote
Scenario: Verify the recent opened quote appears under Recently Viewed option
    Given user is on Quotes page
    When user mouse hover on Recently Viewed option
    Then user should see the recent opened quote appears in Recently Viewed option

@lead
Feature: Leads

  Scenario: Verify user can see Leads drop down with options
    Given user is on Home page
    When User mouse hover on Leads 
    Then User should see the following options in the Leads dropdown is Displayed:
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

 Scenario: Verify user can see Create Lead page with features
    Given user is on Create Lead page
    When User views features on Create Lead page
    Then user should see the following features in the Create Lead page is Displayed:
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
    When user clicks on Save button by entering valid data in "page" withall mandatory fields
    Then user should be redirected to the new Lead record page with features

Scenario: Verify user able to see popup to cancel Lead with valid details
    Given user is on Create Lead page
    When user clicks on Cancel button by entering valid data in "page" withall mandatory fields
    Then User able to see popup to cancel Lead creation

Scenario: Verify user able to cancel Lead creation
    Given user is on Create Lead page with popup to cancel Lead creation
    When user clicks on "Ok" button in the popup
    Then user should be redirected to the View Leads page

Scenario: Verify user able to edit new lead record fields
    Given user is on new Lead record page
    When user clicks on Edit button on the "page"
    Then User able to update new lead record fields

Scenario: Verify user able to see insights of new lead record
    Given user is on new Lead record page
    When User clicks insights button
    Then User able to see insights of the new lead record

Scenario: Verify user able to  see options on actions drop down of new lead record page
    Given user is on new lead record with actions dropdown
    When user clicks on actions drop down
    Then User able to see the following options in the actions drop down:
      | Actions drop down options |
      | Duplicate                 |
      | Delete                    |
      | Convert Lead              |
      | Print as PDF              |
      | Find Duplicates           |
      | View Change Log           |

Scenario: Verify user able to delete new lead record
    Given user is on new lead record with actions dropdown
    When user clicks on Delete option 
    Then User able to see popup to delete Lead record

Scenario: Verify user able to view change log of new lead  record
    Given user is on new lead record with actions dropdown
    When user clicks on View Change Log option 
    Then User able to see change log of the new lead record

Scenario: Verify user can import file  with choose file button
    Given User is on  create Lead from Vcard page
    When User clicks choose file button
    Then User should see selected file on page

Scenario: Verify user imported with valid file
    Given User is on  create Lead from Vcard page with selcted file
    When User clicks Import Vcard button
    Then User should see imported file details on page

Scenario Outline: Verify vCard validation with different files
    Given user is on Create Lead from vCard page
    When user selects "<file>" from TestData
    Then user should see "<expected_result>"

    Examples:
      | file         | expected_result                                                                       |
      | oversize.vcf | The uploaded file exceeds the 30000 bytes size limit which was specified in HTML form. |
      | invalid.vcf  | Vcard Doesnot have all required fields for this module.Please refer to suitecrm.log for details |

Scenario: verify user able to see features on View Leads page
    Given user is on View Leads page
    When User views features on Create Lead page
    Then user should see the following features in the View Leads page:
      | features        |
      | Name        |
      | Status          |
      | Account Name           |
      | filter            |
      | insights           |
      | Office Phone           |
      | Email |
      |User|
  

Scenario Outline: Verify User able to see Bulk Action drop down
    Given user is on View Leads page
    When User clicks on Bulk Action drop down
    Then User able to see the following options in the Bulk Action drop down:
      | Bulk Action drop down options |
      | Delete                        |
      | Merge                         |
      | Mass Update                        |
      |Add to Target List                        |
      |Print as PDF                        |
      |Export                         |

Scenario: Verify user can select current page existing Leads records
    Given user is on View Leads page with Bulk Action drop down
    When User clicks on Select This Page option in Bulk Action drop down
    Then User should see only current page Leads records selected

Scenario: Verify user can filter leads records 
    Given user is on View Leads page 
    When User clicks on Filter 
    Then User should see filter options to filter leads records

Scenario: Verify user can enter last name in the filter
    Given user is on the View Leads page with filter options
    When user enters a last name in the filter
    Then the last name should be displayed in the filter field

Scenario: Verify user can filter leads records by lastname
    Given user is on View Leads page with specified lastname on filter options
    When user clicks the search button
    Then User should see leads records matching the specified last name

Scenario: Verify user can select a valid file for importing leads
    Given user is on the Import Leads page
    When user selects a valid import file from TestData
    Then the selected file name should be displayed

Scenario: Verify validation when user proceeds without selecting a file
    Given user is on the Import Leads page
    When user clicks the Next button without selecting a file
    Then user should see a file validation message 

      



    

    
    
    





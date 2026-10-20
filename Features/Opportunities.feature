@Opportunities

Feature: Opportunities

Background: User is logged into SuiteCRM Application and is on Home page

    Scenario: Expand the Opportunities dropdown menu
        Given User is on SuiteCRM Application Home page
        When User Hover over Opportunities tab
        Then Opportunities dropdown menu should expand

    Scenario: Verify options in the Opportunities dropdown menu
        Given User is on SuiteCRM Application Home page
        When Opportunities dropdown menu is expanded
        Then The following options should display
        |Create Opportunity|
        |View Opportunities|
        |Import Opportunities|

    Scenario: Verify User navigates to the selected Opportunities page 
        Given User is on SuiteCRM Application Home page
        When User clicks <name>
        Then User should be redirected to <page> screen
        |name|                        |page|
        |Create Opportunity|          |Create Opportunity|
        |View Opportunities|          |View Opportunities|
        |Import Opportunities|        |Import Opportunities|

   
@Createopportunity
  
    Scenario: Verify User can see the internal tabs and buttons on Create Opportunity screen
        Given User is on Create Opportunity screen 
        When User View the Create Opportunity screen
        Then The following tabs and buttons should display on Create Opportunity screen
        |Tabs and Buttons|
        |Basic|
        |Other|
        |Save|
        |Cancel|

@Savepositive

    Scenario: Verify saving a contact by entering the mandatory fields on the Basic tab
        Given User is on the Create opportunity screen Basic tab
        When User clicks the Save button on Basic tab by providing mandatory details
        Then User should redirected to Opportunity record details screen

@Savenegative

    Scenario: Verify saving a contact with all fields empty on the Basic tab
        Given User is on the Create opportunity screen Basic tab
        When User clicks the Save button on Basic tab with all fields empty
        Then User should see error message on Basic tab Missing required field: <fieldname>
        |fieldname                                  |
        |Opportunity Name                           |
        |Opportunity Amount                         |
        |Missing required field: Sales Stage        |
        |Missing required field: Account Name       |
        |Missing required field: Expected Close Date|

    Scenario Outline: Verify field level Validations for invalid entries
        Given User is on the Create opportunity screen Basic tab
        When User enters Invalid data in <fieldname> on Basic tab
        Then User should see error message <message> on Basic tab
        |fieldname          |           |message|
        |OPPORTUNITY AMOUNT |           |Invalid currency format. Expected: '1,000.5'   |
        |PROBABILITY (%)    |           |Invalid int format. Expected: '1,000'          |
        |EXPECTED CLOSE DATE|           |Invalid date format. Expected: '2020-01-23'    |

    Scenario: Verify saving a contact from the Other tab without entering mandatory
        Given User is on Create opportunity screen Other tab
        When User clicks the Save button on Other tab without providing mandatory details
        Then User should see error message on Other tab "There are validation errors,unable to perform action "

@Cancelpositive 

    Scenario: Verify Cancel button with all fields empty on the Create Basic tab
        Given User is on the Create opportunity screen Basic tab
        When User clicks the Cancel button with all fields empty on Basic tab
        Then User should navigate to View Opportunities screen with list of all existing contacts

@cancelnegative

    Scenario: Verify Cancel button by entering the data in at least one field on the Create opportunity -Basic tab
        Given User is on the Create opportunity screen Basic tab
        When User clicks the Cancel button by entering the data in at least one field on Basic tab
        Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from Basic tab


    Scenario: Verify Cancel button from Other tab by entering the data in at least one field on the Create opportunity -Basic tab
        Given User is on the Create opportunity screen Other tab
        When User clicks the Cancel button by entering the data in at least one field on Basic Tab
        Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from Other tab

@Viewopportunities

    Scenario: Select the opportunities from the list of opportunities
        Given User is on the View opportunities screen
        When User selects the checkbox
        Then User should be able to see the selected Opportunity from list of Opportunities

    Scenario Outline: Verify User able to see Bulk Action drop down
        Given User is on the View opportunities screen
        When User clicks on Bulk Action drop down
        Then User able to see the following options in the Bulk Action drop down
        | Bulk Action drop down|
        |Delete                |
        |Export                |
        |Merge                 |	
        |Mass Update           |


    Scenario: Select the opportunities from the list and perform Delete Action from Bulk Actions
        Given User is on the View opportunities screen
        When User selects the Opportunity and click on Delete from Bulk Action drop down
        Then The selected Opportunity should be Deleted from the list

    Scenario: Select the Opportunity from the list and perform Export Action from Bulk Actions
        Given User is on the View opportunities screen
        When User selects the Opportunity and click on Export from Bulk Action drop down
        Then The selected Opportunity should be Exported into .csv file

    Scenario: Select two or more opportunities from the list and perform Merge Action from Bulk Actions
        Given User is on the View opportunities screen
        When User selects two or more contacts and click on Merge from Bulk Action drop down
        Then The selected opportunity records should be Merged

    Scenario: Select two or more opportunities from the list and perform Mass Update Action from Bulk Actions
        Given User is on the View opportunities screen
        When User selects two or more opportunities and click on Mass Update from Bulk Action drop down
        Then User should be able to Update the selected opportunity record

    Scenario: Bulk Action Option is disabled in View opportunities screen
        Given User is on the View opportunities screen
        When User do not select at least one record from list of opportunities
        Then The Bulk Action Option should be disabled in View opportunities screen

@ImportOpportunities

    Scenario: Verify "Download Import File Template" link is displayed on Import Opportunities screen
        Given User is on Upload Import File screen on Import Opportunities screen
        When User clicks on Download Import File Template link on Import Opportunities screen
        Then The File Template in .CSV format should be downloaded on Import Opportunities screen


    Scenario: Verify that the user uploads contacts from a Valid file format on Import Opportunities screen
        Given User is on Upload Import File screen on Import Opportunities screen
        When User click on Choose File button to uploads a valid file on Import Opportunities screen
        Then The system should display the imported file in related format on Import Opportunities screen

    Scenario: Verify User clicks on Next button after uploading Valid File format on Import Opportunities screen
        Given User is on Upload Import File screen on Import Opportunities screen
        When User uploads valid file format and click on Next Button on Import Opportunities screen
        Then User should navigate to Confirm Import File Properties screen on Import Opportunities screen


    Scenario: Verify User clicks on Next button on Confirm Import File Properties screen on Import Opportunities screen
        Given User is on Confirm Import File Properties screen -Import Opportunities screen
        When User clicks Next button on Confirm Import File Properties screen -Import Opportunities screen
        Then User should navigate to Confirm Field Mappings screen -Import Opportunities screen


    Scenario: Verify User clicks on Next button on Confirm Field Mappings screen -Import Opportunities screen
        Given User is on Confirm Field Mappings screen -Import Opportunities screen
        When User clicks Next button on Confirm Field Mappings screen -Import Opportunities screen
        Then User should navigate to Check for Possible Duplicates screen -Import Opportunities screen
  
    Scenario: Verify User clicks on Import Button on Check for Possible Duplicates screen -Import Opportunities screen
        Given User is on Check for Possible Duplicates screen -Import Opportunities screen
        When User clicks Import Button on Check for Possible Duplicates screen-Import Opportunities screen
        Then User should navigate to View Import Results Screen-Import Opportunities screen

    Scenario: Verify User clicks on Exit button on View Import Results screen-Import Opportunities screen
        Given User is on  View Import Results screen-Import Opportunities screen
        When User clicks "Exit" on  View Import Results screen-Import Opportunities screen
        Then User should navigate to View Opportunities screen-Import Opportunities screen

    Scenario: Verify that the user uploads contacts from an Invalid file format-Import Opportunities screen
        Given User is on Upload Import File screen -Import Opportunities screen
        When User click on Choose File button to uploads an Invalid file -Import Opportunities screen
        Then The system should display the appropriate validation error message-Import Opportunities screen

    Scenario: Verify User clicks on Next button without uploading a file-Import Opportunities screen
        Given User is on Upload Import File screen -Import Opportunities screen
        When User click on Next button without uploading a valid file-Import Opportunities screen
        Then The system should display an error message "No file choosen" in Red color-Import Opportunities screen
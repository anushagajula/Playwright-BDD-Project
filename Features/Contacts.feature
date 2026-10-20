@Contacts
Feature: Contacts

Background: User is logged into SuiteCRM Application and is on Home page

  Scenario: Expand the Contacts dropdown menu
    Given User is on SuiteCRM Application Home page
    When User Hover over Contacts tab
    Then Contacts dropdown menu should expand

  Scenario: Verify options in the Contacts dropdown menu
    Given User is on SuiteCRM Application Home page
    When Contacts dropdown menu is expanded
    Then The following options should display
    |Create Contact|
    |Create Contact From vCard|
    |View Contacts|
    |Import Contacts|

  Scenario: Verify User navigates to the selected Contacts page 
    Given User is on SuiteCRM Application Home page
    When User clicks <name>
    Then User should be redirected to <page> screen
    |name|                        |page|
    |Create Contact|              |Create Contact|
    |Create Contact From vCard|   |Create Contact From vCard|
    |View Contacts|               |View Contacts|
    |Import Contacts|             |Import Contacts|

@Createcontacts
  
  Scenario: Verify User can see the internal tabs and buttons on Create Contact screen
    Given User is on Create contact screen 
    When User View the Create contact screen
    Then The following tabs and buttons should display
    |Tabs and Buttons|
    |Overview|
    |More Information|
    |Other|
    |Save|
    |Cancel|

  @Savepositive

  Scenario: Verify saving a contact by entering the mandatory fields on the Overview tab
    Given User is on the Create Contact screen Overview tab
    When User clicks the Save button by providing mandatory details
    Then User should redirected to record details screen

  @Savenegative

  Scenario: Verify saving a contact with all fields empty on the Overview tab
    Given User is on the Create Contact screen Overview tab
    When User clicks the Save button with all fields empty
    Then User should see error message on Overview tab "Missing required field: Last Name"

   Scenario: Verify field level Validations for invalid entries
    Given User is on the Create Contact screen Overview tab
    When User enters Invalid data in <fieldname>
    Then User should see error message <message>
    |fieldname|           |message|
    |Office Phone|        |Invalid phone format.|
    |Mobile|              |Invalid phone format.|
    |Email Address|       |Invalid email format. Expected: 'example@example.org'|

  Scenario: Verify saving a contact from the More Information tab without entering mandatory
    Given User is on Create Contact screen More Information tab
    When User clicks the Save button without providing mandatory details
    Then User should see error message on More Information tab "Missing required field: Last Name"

@Cancelpositive 

  Scenario: Verify Cancel button with all fields empty on the Create Overview tab
    Given User is on the Create Contact screen Overview tab
    When User clicks the Cancel button with all fields empty
    Then User should navigate to View Contacts screen with list of all existing contacts

@cancelnegative

  Scenario: Verify Cancel button by entering the data in at least one field on the Create Contact -Overview tab
    Given User is on the Create Contact screen Overview tab
    When User clicks the Cancel button by entering the data in at least one field
    Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from Overview tab


  Scenario: Verify Cancel button from "More Information Tab" by entering the data in at least one field on the Create Contact -Overview tab
    Given User is on the Create Contact screen More Information tab
    When User clicks the Cancel button by entering the data in at least one field on Overview Tab
    Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from More Information tab

@CreatecontactVcardpositive

  Scenario: Verify that the user uploads a Valid file format
    Given User is on Create Contact from vCard screen
    When User click on Choose File button to uploads a valid vCard file 
    Then User should see the selected file in .vcf format

  Scenario: Verify that vCard contact is created
    Given User is on Create Contact from vCard screen
    When User clicks on Import Vcard button
    Then User should see the record details screen  
  
@CreatecontactVcardnegative

  Scenario: Verify that error message is displayed for Invalid file format
    Given User is on Create Contact from vCard screen
    When User uploads an Invalid file format and clicks on Import Vcard button
    Then User should see an error message "Vcard Doesnot have all required fields for this module.Please refer to suitecrm.log for details"

  Scenario: Verify that error message is displayed for oversized file
    Given User is on Create Contact from vCard screen
    When User uploads an oversized file and clicks on Import Vcard button
    Then User should see an error message "The uploaded file exceeds the 30000 bytes size limit which was specified in HTML form."
  
  Scenario: Verify that Alert pop up is displayed
    Given User is on Create Contact from vCard screen
    When User clicks Import Vcard button without selecting a file
    Then User should see an Alert popup

@Viewcontacts

  Scenario: Select the Contacts from the list of Contacts
    Given User is on the View Contacts screen
    When User selects the checkbox
    Then User should be able to see the selected Contact from list of contacts

  Scenario Outline: Verify User able to see Bulk Action drop down
    Given User is on the View Contacts screen
    When User clicks on Bulk Action drop down
    Then User able to see the following options in the Bulk Action drop down
      | Bulk Action drop down|
      |Add to Target List    |
      |Print as PDF          |
      |Delete                |
      |Export                |
      | Merge                |
      | Mass Update          |


  Scenario: Select the Contacts from the list and perform Delete Action from Bulk Actions
    Given User is on the View Contacts screen
    When User selects the Contact and click on Delete from Bulk Action drop down
    Then The selected Contact should be Deleted from the list

  Scenario: Select the Contact from the list and perform Export Action from Bulk Actions
    Given User is on the View Contacts screen
    When User selects the Contact and click on Export from Bulk Action drop down
    Then The selected Contact should be Exported into .csv file

  Scenario: Select two or more Contacts from the list and perform Merge Action from Bulk Actions
    Given User is on the View Contacts screen
    When User selects two or more contacts and click on Merge from Bulk Action drop down
    Then The selected records should be Merged

  Scenario: Select two or more Contacts from the list and perform Mass Update Action from Bulk Actions
    Given User is on the View Contacts screen
    When User selects two or more Contacts and click on Mass Update from Bulk Action drop down
    Then User should be able to Update the selected records

  Scenario: Bulk Action Option is disabled
    Given User is on the View Contacts screen
    When User do not select at least one record from list of Contacts
    Then The Bulk Action Option should be disabled

@ImportContacts

  Scenario: Verify "Download Import File Template" link is displayed
    Given User is on Upload Import File screen 
    When User clicks on Download Import File Template link
    Then The File Template in .CSV format should be downloaded

  Scenario: Verify that the user uploads contacts from a Valid file format
    Given User is on Upload Import File screen 
    When User click on Choose File button to uploads a valid file 
    Then The system should display the imported file in related format

  Scenario: Verify User clicks on Next button after uploading Valid File format
    Given User is on Upload Import File screen 
    When User uploads valid file format and click on Next Button
    Then User should navigate to Confirm Import File Properties screen

  Scenario: Verify User clicks on Next button on Confirm Import File Properties screen
    Given User is on Confirm Import File Properties screen
    When User clicks Next button on Confirm Import File Properties screen
    Then User should navigate to Confirm Field Mappings screen

  Scenario: Verify User clicks on Next button on Confirm Field Mappings screen
    Given User is on Confirm Field Mappings screen
    When User clicks Next button on Confirm Field Mappings screen
    Then User should navigate to Check for Possible Duplicates screen
  
  Scenario: Verify User clicks on Import Button on Check for Possible Duplicates screen
    Given User is on Check for Possible Duplicates screen
    When User clicks Import Button on Check for Possible Duplicates screen
    Then User should navigate to View Import Results Screen

  Scenario: Verify User clicks on Exit button on View Import Results screen
    Given User is on  View Import Results screen
    When User clicks "Exit" on  View Import Results screen
    Then User should navigate to View Contacts screen

  Scenario: Verify that the user uploads contacts from an Invalid file format
    Given User is on Upload Import File screen 
    When User click on Choose File button to uploads an Invalid file 
    Then The system should display the appropriate validation error message

  Scenario: Verify User clicks on Next button without uploading a file
    Given User is on Upload Import File screen 
    When User click on Next button without uploading a valid file
    Then The system should display an error message "No file choosen" in Red color
    





  





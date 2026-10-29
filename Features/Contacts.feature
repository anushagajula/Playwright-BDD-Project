@Contacts
Feature: Contacts


Background: User is logged into SuiteCRM Application and is on Home page

@Contacttab
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

@CreatecontactSavepositive

  Scenario: Verify saving a contact by entering the mandatory fields on the Overview tab
    Given User is on the Create Contact screen Overview tab
    When User clicks the Save button by providing mandatory details
    Then User should redirected to record details screen

  @CreatecontactSavenegative

  Scenario: Verify saving a contact with all fields empty on the Overview tab
    Given User is on the Create Contact screen Overview tab
    When User clicks the Save button with all fields empty
    Then User should see error message on Overview tab "Missing required field: Last Name"

   
@CreatecontactCancelpositive 

  Scenario: Verify Cancel button with all fields empty on the Create Overview tab
    Given User is on the Create Contact screen Overview tab
    When User clicks the Cancel button with all fields empty
    Then User should navigate to View Contacts screen with list of all existing contacts

@Createcontactcancelnegative

  Scenario: Verify Cancel button by entering the data in at least one field on the Create Contact -Overview tab
    Given User is on the Create Contact screen Overview tab
    When User clicks the Cancel button by entering the data in at least one field
    Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from Overview tab


  
@CreatecontactVcardpositive

  Scenario: Verify that the user uploads a Valid file format
    Given User is on Create Contact from vCard screen
    When User click on Choose File button to uploads a valid vCard file 
    Then User should see the selected file in .vcf format
    When User clicks on Import Vcard button
    Then User should see the record details screen

  
@Viewcontacts

  Scenario: Select the Contacts from the list of Contacts
    Given User is on the View Contacts screen
    When User selects the checkbox on the View Contacts screen
    Then User should be able to see the list of contacts selected

  Scenario: Verify User able to see Bulk Action drop down on View Contacts screen
    Given User is on the View Contacts screen
    When User clicks on Contacts Bulk Action drop down on View Contacts screen and selects Export option
    Then the contacts file is downloaded  


@ImportContacts

  

  Scenario: Verify that the user uploads contacts from a Valid file format
    Given User is on Upload Import File screen 
    When User click on Choose File button to uploads a valid file and click on Next Button
    Then User should navigate to Confirm Import File Properties screen

  

  
    





  





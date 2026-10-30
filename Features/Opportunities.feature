@Opportunities @authenticated

Feature: Opportunities

Background: User is logged into SuiteCRM Application and is on Home page
@OpportunitiesTab
    Scenario: Expand the Opportunities dropdown menu
        Given User is on SuiteCRM Application Home page and view Opportunities tab
        When User Hover over Opportunities tab
        Then Opportunities dropdown menu should expand

    Scenario: Verify options in the Opportunities dropdown menu
        Given User is on SuiteCRM Application Home page and view Opportunities tab
        When Opportunities dropdown menu is expanded
        Then The following options should display under opportunities
        |Create Opportunity|
        |View Opportunities|
        |Import Opportunities|

    Scenario: Verify User navigates to the selected Opportunities page 
        Given User is on SuiteCRM Application Home page and view Opportunities tab
        When User clicks <name>
        Then User should be redirected to <page> screen
        |name|                        |page|
        |Create Opportunity|          |Create Opportunity|
        |View Opportunities|          |View Opportunities|
        |Import Opportunities|        |Import Opportunities|

   
@CreateopportunitySavepositive

    Scenario: Verify saving a contact by entering the mandatory fields on the Basic tab
        Given User is on the Create opportunity screen Basic tab
        When User clicks the Save button on Basic tab by providing mandatory details
        Then User should redirected to Opportunity record details screen

 @Viewopportunities

    Scenario: Select the opportunities from the list of opportunities
        Given User is on the View opportunities screen
        When User selects the checkbox on the View opportunities screen
        Then User should be able to see the selected Opportunity from list of Opportunities

    Scenario: Verify User able to see Bulk Action drop down on View Opportunities screen
        Given User is on the View opportunities screen
        When User clicks on Opportunities Bulk Action drop down on View Opportunities screen and selects Export option
        Then the opportunities file is downloaded        
   

@ImportOpportunities

    Scenario: Verify that the user uploads contacts from a Valid file format on Import Opportunities screen
        Given User is on Upload Import File screen on Import Opportunities screen
        When User click on Choose File button to uploads a valid file on Import Opportunities screen
        Then The system should display the imported file in related format on Import Opportunities screen
    

    
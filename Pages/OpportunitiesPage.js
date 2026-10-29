import { expect } from '@playwright/test';
import path from 'node:path';

export class OpportunitiesPage {
  constructor(page) {
    this.page = page;
    this.OppurtunityTab = page.locator('a.top-nav-link').filter({ hasText: /^Opportunities$/ });    
    this.createOpportunityOption=page.getByRole('link', { name: 'Create Opportunity' });    
    this.viewOpportunityOption=page.getByRole('link', { name: 'View Opportunities' });
    this.importOpportunityOption=page.getByRole('link', { name: 'Import Opportunities' });
    this.OpportunityName=page.getByRole('textbox').nth(1);
    this.opportunityAmount=page.locator('scrm-currency-edit').getByRole('textbox');
    this.salesStage=page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Prospecting Qualification' }).getByRole('combobox');
    this.probability=page.getByRole('textbox').nth(4);
    this.accountName = this.page.getByRole('combobox', {name: 'Select an item'}).first();
    this.expectedCloseDate=page.getByRole('textbox', { name: 'yyyy-mm-dd' });
    this.saveButton=page.getByRole('button', { name: 'Save' });
    this.viewopportunitiescheckbox=page.locator('scrm-table-header').getByLabel('Select Action Menu');
    this.selectallopportunities=page.locator('a').filter({ hasText: 'Select All' }).first();
    this.bulkActionDropdownButtonopportunities=page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
    this.exportopportunity=page.locator('a').filter({ hasText: 'Export' }).nth(1);
    this.opportunityselectfile=page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
    this.nextbuttonopportunities=page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
    this.confirmimportfilepropopportunities=page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
  }
    async verifyHomePage() 
        {
            await expect(this.OppurtunityTab).toBeVisible();
        }
    async hoverOverOpportunities() 
        {
            await this.OppurtunityTab.hover();
            
        }

    async verifyDropdownExpanded() 
        {
            await expect(this.createOpportunityOption).toBeVisible();
            await expect(this.viewOpportunityOption).toBeVisible();
            await expect(this.importOpportunityOption).toBeVisible();
        }

    async verifyDropdownOptions(expectedOptions) 
    {
      const optionLocators = {
      'Create Opportunity': this.createOpportunityOption,
      'View Opportunities': this.viewOpportunityOption,
      'Import Opportunities': this.importOpportunityOption
    };

    for (const optionName of expectedOptions) 
    {
      await expect(optionLocators[optionName]).toBeVisible();
    }
    }
        async verifyCreateOpportunityPage() 
        {
          await this.hoverOverOpportunities();
          await this.verifyDropdownExpanded();

          await expect(this.createOpportunityOption).toBeVisible();
          await this.createOpportunityOption.click();

          await expect(this.page).toHaveURL(/opportunities\/edit/);
          
        }

        async verifyviewOpportunityspage()
        {
            await this.hoverOverOpportunities();
            await expect(this.viewOpportunityOption).toBeVisible();
            await this.viewOpportunityOption.click();
            await expect(this.page).toHaveURL(/#\/opportunities\/index/, {timeout: 10000} ); 

        }
        async importOpportunitypage()
        {
        await this.importOpportunityOption.click();
        await expect(this.page).toHaveURL(/#\/import\/step1\?import_module=Opportunities&return_module=Opportunities&return_action=index/);

        }

        async enterOpportunityDetails(opportunity)
        {
          await this.verifyCreateOpportunityPage();
          await this.OpportunityName.fill(opportunity['OPPORTUNITY Name']);
          await this.opportunityAmount.fill(opportunity['OPPORTUNITY AMOUNT']);
          await this.salesStage.selectOption({ label: opportunity['SALES STAGE'] });
          await this.probability.fill(opportunity['PROBABILITY (%)']);


          await this.accountName.click();

      console.log('Dropdown HTML:',await this.page.locator('body').innerText());


          await this.expectedCloseDate.fill(opportunity['EXPECTED CLOSE DATE']);
        }

        async checkAccountDropdown() {
        await this.accountName.click();
        await this.page.waitForTimeout(2000);

        console.log('URL:', this.page.url());
        console.log('Pages:', this.page.context().pages().length);
}

        async saveOpportunity()
        {
          await this.saveButton.click(); 
        }
        async verifyopportunityDetails()
        {
          await expect(this.page).toHaveURL(/#\/opportunities\/record\/[^/?]+/);
          await expect(this.page).toHaveURL(/#\/opportunities\/(record|edit)/);
        }
async verifyviewOpportunitydropdown()
{
  await this.viewopportunitiescheckbox.click();
  await this.page.waitForTimeout(2000);
  await this.selectallopportunities.click();
  await this.page.waitForTimeout(2000);
}
async clickBulkActionDropdownopportunities()
{
  await this.bulkActionDropdownButtonopportunities.click();
    await this.page.waitForTimeout(2000);
}
async exportOpportunity()
{
await expect(this.exportopportunity).toBeVisible();

await this.exportopportunity.click();
}
async uploadfileopportunities()
{
    await expect(this.page).toHaveURL(/#\/import\/step1\?import_module=Opportunities&return_module=Opportunities&return_action=index/);
       
    await this.opportunityselectfile.setInputFiles('Testdata/SampleOpportunities.csv')
        
    await this.page.waitForTimeout(2000);

}

async clickNextButtonopportunities() 

{
   await this.nextbuttonopportunities.click();
}
async Importfilepropertiesopportunities()
{
    
    await expect(this.confirmimportfilepropopportunities).toBeVisible();
}

}

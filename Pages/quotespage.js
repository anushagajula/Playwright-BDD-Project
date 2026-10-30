import { expect } from '@playwright/test';
import log from '../Utils/logger.js';
import testData from '../Testdata/testdata.json' with { type: 'json' };
import path from 'node:path';

export class QuotesPage {
  constructor(page) {
    this.page = page;


    //============================== Add your Locators===========================
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', {
      name: 'Log In',
      exact: true
    });
    this.quotesMenu = page.getByText('Quotes', {
      exact: true
    }).first();

    this.quotesDropdown = this.page.locator('.nav-link').filter({
      hasText: /^Quotes$/
    });

    this.createQuote = this.page.getByRole('link', {
      name: 'Create Quote',
      exact: true
    });

    this.import = this.page.getByRole('link', {
      name: 'Import',
      exact: true
    });
    this.viewQuotes = this.page.getByRole('link', {
      name: 'View Quotes',
      exact: true
    });
    this.importLineItems = this.page.getByRole('link', {
      name: 'Import Line Items',
      exact: true
    });

   this.quoteFrame = this.page.frameLocator('iframe[src*="AOS_Quotes"]');
this.overview = this.quoteFrame
  .locator('.panel-heading')
  .filter({ hasText: /Overview/i });

this.addressInformation = this.quoteFrame
  .locator('.panel-heading')
  .filter({ hasText: /Address Information/i });

this.lineItems = this.quoteFrame
  .locator('.panel-heading')
  .filter({ hasText: /Line Items/i });

this.saveButton = this.quoteFrame.getByRole('button', {
  name: 'Save',
  exact: true
});

this.cancelButton = this.quoteFrame.getByRole('button', {
  name: 'Cancel',
  exact: true
});
    this.editButton = this.quoteFrame.getByRole('button', {
      name: 'Edit',
      exact: true
    });
   this.title = this.quoteFrame
  .getByText('Title:*', { exact: true })
  .locator('xpath=following::input[1]');

this.validUntil = this.quoteFrame
  .locator('.edit-view-row-item[data-field="expiration"]')
  .locator('input');

    this.insightButton = this.page.getByRole('button', {
      name: ' Insights ',
      exact: true
    });
    this.deleteButton = this.page.getByText('Delete', {
      exact: true
    });
    this.viewChangelogButton = this.page.getByText('View Change Log', {
      exact: true
    });
    this.actionsDropdown = this.quoteFrame.getByRole('link', {
      name: /Actions/i
    });
    this.viewQuoteChangeLogOption = this.quoteFrame.getByRole('button', {
      name: 'View Change Log',
      exact: true
    });
    this.deleteQuoteOption = this.quoteFrame.getByRole('button', {
      name: 'Delete',
      exact: true
    });
    this.filterButton = this.page.getByRole('button', {
      name: 'Filter',
      exact: true
    });
    this.headerBulkActionButton = this.page
      .locator('scrm-table-header')
      .getByRole('button', { name: 'Bulk Action', exact: true 

      });
  this.recentlyViewed = this.page.getByText('Recently Viewed', {
  exact: true
}).first();

  }
  //===========================================Methods======================================
  async login() {
    const url = process.env.SCRM_URL;
    const username = process.env.SCRM_USERNAME;
    const password = process.env.SCRM_PASSWORD;

    if (!url || !username || !password) {
      throw new Error(
        'SCRM_URL, SCRM_USERNAME, and SCRM_PASSWORD must be set in .env'
      );
    }

    await this.page.goto(url);

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    await expect(this.quotesMenu).toBeVisible({
      timeout: 30000
    });

    log.info('Login successful');
  }

  async hoverOnQuotes() {
    await this.quotesMenu.hover();
  }
  async verifyDropdownOptions(options) {

    const links = await this.page.locator('a:visible').allInnerTexts();

    const quotesOptions = links.filter(text =>
      options.includes(text.trim())
    );

    console.log('Quotes dropdown options found:', quotesOptions);

    for (const option of options) {
      await expect(
        this.page.getByRole('link', {
          name: option,
          exact: true
        })
      ).toBeVisible();
    }

    log.info('All Quotes dropdown options are visible');
  }
  async clickQuotesOption(name) {
    await this.hoverOnQuotes();
    switch (name) {
      case 'Create Quote':
        await this.createQuote.click();
        break;

      case 'Import Line Items':
        await this.importLineItems.click();
        break;

      case 'View Quotes':
        await this.viewQuotes.click();
        break;

      case 'Import':
        await this.import.click();
        break;

      default:
        throw new Error(`Invalid Quotes option: ${name}`);
    }
    log.info(`Clicked Quotes option: ${name}`);
  }
  async redirectedpage(expectedPage) {
    const expectedUrl = testData.urls[expectedPage];

    if (!expectedUrl) {
      throw new Error(
        `No expected URL configured for: ${expectedPage}`
      );
    }

    await expect(this.page).toHaveURL(expectedUrl, {
      timeout: 15000
    });

    log.info(`Successfully navigated to ${expectedPage}`);
  }

async viewCreateQuoteFeatures() {
  await expect(
    this.quoteFrame.getByRole('heading', { name: 'CREATE', exact: true })
  ).toBeVisible({ timeout: 30000 });
}

  async verifyCreateQuoteFeatureDisplayed(feature) {
  const locators = {
    overview: this.overview,
    'address information': this.addressInformation,
    'line items': this.lineItems,
    save: this.saveButton,
    cancel: this.cancelButton
  };

  const key = feature.trim().toLowerCase();
  const locator = locators[key];

  if (!locator) {
    throw new Error(`Unknown feature: ${feature}`);
  }

  await expect(locator).toBeVisible({ timeout: 10000 });
  log.info(`${feature} is displayed on the Create Quote page`);
}
  async saveQuoteWithInvalidDetails(fieldName) {
  switch (fieldName.trim().toLowerCase()) {
    case 'invalid title':
      await this.title.fill(testData.invalidQuote.title);
      break;

    case 'invalid valid until':
      await this.validUntil.fill(testData.invalidQuote.validUntil);
      break;

    default:
      throw new Error(`Unknown invalid Quote field: ${fieldName}`);
  }

  await this.saveButton.click();
  log.info(`Clicked Save button for scenario: ${fieldName}`);
}
async saveQuoteWithoutDetails() {
  await this.saveButton.click();
}
async verifyQuoteErrorMessage(message) {
  await expect(
    this.quoteFrame.getByText(message, { exact: true })
  ).toBeVisible({ timeout: 10000 });
}

async verifyNewQuoteCreated() {
  await expect(this.page).toHaveURL(/#\/quotes\/record\//, {
    timeout: 15000
  });

  await expect(
    this.quoteFrame.getByRole('heading', {
      name: testData.validQuote.title,
      exact: true
    })
  ).toBeVisible({ timeout: 15000 });
}
async clickCancelButton() {
    await this.cancelButton.click();

}
async fillQuoteWithValidData() {
  const data = testData.validQuote;

  await this.title.fill(data.title);
  await this.validUntil.fill(data.validUntil);
}
async createQuoteWithValidData() {
  await this.fillQuoteWithValidData();
  await this.saveButton.click();

  log.info('Entered and saved valid quote data');
}

async clickCancelButtonWithValidData() {
  await this.fillQuoteWithValidData();
  await this.clickCancelButton();
}
async viewQuotesPageDisplayed() {
  await expect(this.page).toHaveURL(/#\/quotes\/(?:list|index)(?:\?|$)/, {
    timeout: 15000
  });

  log.info('Successfully redirected to the View Quotes page');
}

async createNewQuoteRecord() {
  await this.clickQuotesOption('Create Quote');
  await this.createQuoteWithValidData();
  await this.verifyNewQuoteCreated();
}

async openQuoteActionsDropdown() {
  await this.actionsDropdown.click();
}

async verifyQuoteActionsOptions(options) {
  for (const option of options) {
    const escapedOption = option.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    await expect(
      this.quoteFrame.getByRole('button', {
        name: new RegExp(`^${escapedOption}$`, 'i')
      })
    ).toBeVisible({ timeout: 10000 });
  }
}

async clickEditQuoteButton() {
  await this.actionsDropdown.click();
  await this.editButton.click();
  await expect(this.title).toBeVisible({ timeout: 15000 });
}

async updateAndVerifyQuoteTitle() {
  const updatedTitle = testData.updatedQuote.title;

  await this.title.fill(updatedTitle);
  await this.saveButton.click();

  await expect(
    this.quoteFrame.getByRole('heading', {
      name: updatedTitle,
      exact: true
    })
  ).toBeVisible({ timeout: 15000 });

  log.info('Updated and verified the Quote title');
}

async createUpdatedQuoteRecord() {
  await this.createNewQuoteRecord();
  await this.clickEditQuoteButton();
  await this.updateAndVerifyQuoteTitle();
}

async openQuoteChangeLog() {
  await this.actionsDropdown.click();
  await this.viewQuoteChangeLogOption.click();
}

async verifyUpdatedQuoteTitleInChangeLog() {
  await expect(
    this.quoteFrame.getByText(testData.updatedQuote.title, { exact: true }).first()
  ).toBeVisible({ timeout: 15000 });

  log.info('Verified the updated Quote title is shown in the change log');
}

async openViewQuotesPage() {
  await this.clickQuotesOption('View Quotes');
  await this.viewQuotesPageDisplayed();
}

async verifyViewQuotesFeature(feature) {
  const normalized = feature.trim().toLowerCase();
  if (normalized === 'filter') {
    await expect(this.filterButton).toBeVisible();
    return;
  }

  const headerNames = {
    contacts: /^contacts?$/i,
    account: /^accounts?$/i
  };
  await expect(
    this.page.getByRole('columnheader', {
      name: headerNames[normalized] ?? new RegExp(`^${feature.trim()}$`, 'i')
    })
  ).toBeVisible();
}

async createQuoteAndOpenList() {
  await this.createNewQuoteRecord();
  await this.clickQuotesOption('View Quotes');
  await this.viewQuotesPageDisplayed();
}

async openBulkActionDropdownForQuote() {
  const quoteRow = this.page
    .getByRole('row')
    .filter({ hasText: testData.validQuote.title })
    .first();
  await expect(quoteRow).toBeVisible({ timeout: 15000 });
  await quoteRow.locator('td').first().click();
  await expect(this.headerBulkActionButton).toBeEnabled();
  await this.headerBulkActionButton.click();
}

async verifyQuoteBulkActionOptions(options) {
  for (const option of options) {
    await expect(
      this.page.getByText(option, { exact: true }).filter({ visible: true })
    ).toBeVisible();
  }
}

async openQuoteFilters() {
  await this.filterButton.click();
}

getQuoteTitleFilter() {
  return this.page
    .getByText('Title', { exact: true })
    .filter({ visible: true })
    .first()
    .locator('xpath=following::input[1]');
}

async verifyQuoteTitleFilterDisplayed() {
  await expect(this.getQuoteTitleFilter()).toBeVisible();
}

async enterQuoteTitleFilter() {
  await this.getQuoteTitleFilter().fill(testData.validQuote.title);
}

async verifyQuoteTitleFilterValue() {
  await expect(this.getQuoteTitleFilter()).toHaveValue(testData.validQuote.title);
}

async openViewQuotesWithTitleFilter() {
  await this.createNewQuoteRecord();
  await this.clickQuotesOption('View Quotes');
  await this.viewQuotesPageDisplayed();
  await this.openQuoteFilters();
  await this.enterQuoteTitleFilter();
}

async searchQuotesByTitle() {
  await this.page.getByRole('button', { name: 'Search', exact: true }).last().click();
}

async verifyQuotesMatchTitle() {
  const titleLinks = this.page.locator('table tbody a[href*="/quotes/record/"]');

  await expect.poll(async () => {
    const titles = (await titleLinks.allTextContents())
      .map(title => title.trim());

    return titles.length > 0 &&
      titles.every(title => title === testData.validQuote.title);
  }, { timeout: 15000 }).toBe(true);
}

async openQuoteImportPage() {
  await this.clickQuotesOption('Import');
}

getQuoteImportFrame() {
  return this.page.frameLocator('iframe:visible');
}

async getQuoteImportFileInput() {
  const fileInput = this.getQuoteImportFrame().locator('input[type="file"]');
  await expect(fileInput).toHaveCount(1, { timeout: 15000 });
  return fileInput;
}

async selectQuoteImportFile(fileName) {
  const filePath = path.resolve(process.cwd(),
    'Testdata',
    fileName
  );
  const fileInput = await this.getQuoteImportFileInput();
  await fileInput.setInputFiles(filePath);
}

async verifyQuoteImportFileSelected(fileName) {
  const fileInput = await this.getQuoteImportFileInput();
  await expect(fileInput).toHaveValue(
    new RegExp(`${fileName.replace('.', '\\.')}$`, 'i')
  );
}

async clickQuoteImportNext() {
  const fileInput = await this.getQuoteImportFileInput();
  await this.getQuoteImportFrame()
    .getByRole('button', { name: 'Next >', exact: true })
    .click();
}

async verifyQuoteImportError() {
  const frame = this.getQuoteImportFrame();
  await expect(
    frame.getByText(
      'The field delimiter and qualifier in the import file could not be detected. Please verify the settings in the Import File Properties.',
      { exact: true }
    )
  ).toBeVisible({ timeout: 10000 });
}

async verifyQuoteImportValidationMessage(message) {
  await this.getQuoteImportFileInput();
  const frame = this.getQuoteImportFrame();
  await expect(frame.getByText(message, { exact: true })).toBeVisible({
    timeout: 10000
  });
}

async clickDeleteQuoteAndVerifyPrompt() {
  await this.actionsDropdown.click();
  const dialogPromise = this.page.waitForEvent('dialog', { timeout: 3000 }).catch(() => null);
  const deleteClick = this.deleteQuoteOption.click();
  const browserDialog = await dialogPromise;
  if (browserDialog) {
    this.deletePromptMessage = browserDialog.message();
    await browserDialog.dismiss();
    await deleteClick;
    return;
  }
  await deleteClick;
  await expect(this.page.getByRole('dialog')).toBeVisible({ timeout: 10000 });
}

async verifyDeleteQuotePrompt() {
  if (this.deletePromptMessage !== undefined) {
    expect(this.deletePromptMessage).toMatch(/delete|remove|confirm/i);
    this.deletePromptMessage = undefined;
    return;
  }
  await expect(this.page.getByRole('dialog')).toBeVisible({ timeout: 10000 });
}

async prepareRecentlyViewedQuote() {
  await this.createNewQuoteRecord();
}

async hoverRecentlyViewed() {
  await this.quotesMenu.hover();
  await expect(this.recentlyViewed).toBeVisible({
    timeout: 15000
  });
  await this.recentlyViewed.hover();
}

async prepareRecentlyViewedQuote() {
  await this.createNewQuoteRecord();
  this.recentQuotePath = new URL(this.page.url()).hash;
}

async verifyRecentQuoteDisplayed() {
  const recentQuoteLink = this.recentlyViewed
    .locator('xpath=ancestor::li[1]')
    .locator(`a[href="${this.recentQuotePath}"]`);

  await expect(recentQuoteLink).toBeVisible({ timeout: 10000 });
}

}

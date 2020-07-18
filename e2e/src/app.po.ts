import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class AppPage {
  // navigateTo(): Promise<unknown> {
  //   return browser.get(browser.baseUrl) as Promise<unknown>;
  // }

  navigateTo(url) {
    return browser.get(url);
  }

  getTransaction():ElementFinder {
    return element(by.css('.transaction'));
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-transactions .container .row h6')).getText() as Promise<string>;
  }

  getTableHeader(): promise.Promise<string> {
    return this.getTransaction().all(by.tagName('tr')).get(0).getText();
  }

  getTableRow(): ElementArrayFinder {
		return this.getTransaction().all(by.tagName('tr'));
	}

  getFirstRowData(): promise.Promise<string> {
    return this.getTableRow().get(1).getText();
  }
}

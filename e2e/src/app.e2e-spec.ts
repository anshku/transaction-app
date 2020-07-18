import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to transactions page', () => {
    page.navigateTo('/transactions');
  });

  it('should display transactions page', () => {
    expect(page.getTitleText()).toEqual('Recent Transactions');
  });

  it('should have a table header', () => {
      expect(page.getTableHeader()).toContain("Type Amount XTZ (USD) Date Address");
  });

  it('table should have at least one row', () => {
    expect(page.getFirstRowData()).toContain("transaction + 8,001.00 XTZ 8,001.0 USD Sep 6 2019, 03:45 tz...j4MX");
  })
});

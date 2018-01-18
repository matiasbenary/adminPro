import { AdminProPage } from './app.po';

describe('admin-pro App', function() {
  let page: AdminProPage;

  beforeEach(() => {
    page = new AdminProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

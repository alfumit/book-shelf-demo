import { BookShelfDemoPage } from './app.po';

describe('book-shelf-demo App', () => {
  let page: BookShelfDemoPage;

  beforeEach(() => {
    page = new BookShelfDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

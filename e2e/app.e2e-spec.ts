import { NgImageSearchPage } from './app.po';

describe('ng-image-search App', () => {
  let page: NgImageSearchPage;

  beforeEach(() => {
    page = new NgImageSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

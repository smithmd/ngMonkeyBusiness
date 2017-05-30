import { NgMonkeyBusinessPage } from './app.po';

describe('ng-monkey-business App', () => {
  let page: NgMonkeyBusinessPage;

  beforeEach(() => {
    page = new NgMonkeyBusinessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

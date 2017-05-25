import { NgfbauthPage } from './app.po';

describe('ngfbauth App', () => {
  let page: NgfbauthPage;

  beforeEach(() => {
    page = new NgfbauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

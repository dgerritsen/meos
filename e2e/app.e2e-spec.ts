import { Meos2Page } from './app.po';

describe('meos2 App', () => {
  let page: Meos2Page;

  beforeEach(() => {
    page = new Meos2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

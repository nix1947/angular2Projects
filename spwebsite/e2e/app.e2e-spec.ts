import { SpwebsitePage } from './app.po';

describe('spwebsite App', () => {
  let page: SpwebsitePage;

  beforeEach(() => {
    page = new SpwebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

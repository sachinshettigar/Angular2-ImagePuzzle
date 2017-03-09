import { Angular2ImagePuzzulPage } from './app.po';

describe('angular2-image-puzzul App', () => {
  let page: Angular2ImagePuzzulPage;

  beforeEach(() => {
    page = new Angular2ImagePuzzulPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

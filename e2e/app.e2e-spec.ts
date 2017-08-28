import { Ng4HPage } from './app.po';

describe('ng4-h App', () => {
  let page: Ng4HPage;

  beforeEach(() => {
    page = new Ng4HPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

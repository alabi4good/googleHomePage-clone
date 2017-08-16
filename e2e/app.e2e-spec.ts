import { GoogleAppPage } from './app.po';

describe('google-app App', () => {
  let page: GoogleAppPage;

  beforeEach(() => {
    page = new GoogleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

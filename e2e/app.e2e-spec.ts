import { AbWebappPocPage } from './app.po';

describe('ab-webapp-poc App', () => {
  let page: AbWebappPocPage;

  beforeEach(() => {
    page = new AbWebappPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { Assignment15Page } from './app.po';

describe('assignment15 App', () => {
  let page: Assignment15Page;

  beforeEach(() => {
    page = new Assignment15Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

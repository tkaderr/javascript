import { LoginRegistrationPage } from './app.po';

describe('login-registration App', () => {
  let page: LoginRegistrationPage;

  beforeEach(() => {
    page = new LoginRegistrationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

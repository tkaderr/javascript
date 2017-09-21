import { MongoAppPage } from './app.po';

describe('mongo-app App', () => {
  let page: MongoAppPage;

  beforeEach(() => {
    page = new MongoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { MongoosedashboardPage } from './app.po';

describe('mongoosedashboard App', () => {
  let page: MongoosedashboardPage;

  beforeEach(() => {
    page = new MongoosedashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

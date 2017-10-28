import { DemongxbootstrapPage } from './app.po';

describe('demongxbootstrap App', () => {
  let page: DemongxbootstrapPage;

  beforeEach(() => {
    page = new DemongxbootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

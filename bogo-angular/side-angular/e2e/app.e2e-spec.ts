import { AngularSideAppPage } from './app.po';

describe('angular-side-app App', function() {
  let page: AngularSideAppPage;

  beforeEach(() => {
    page = new AngularSideAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

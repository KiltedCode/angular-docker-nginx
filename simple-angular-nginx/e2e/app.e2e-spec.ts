import { SimpleAngularNginxPage } from './app.po';

describe('simple-angular-nginx App', function() {
  let page: SimpleAngularNginxPage;

  beforeEach(() => {
    page = new SimpleAngularNginxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

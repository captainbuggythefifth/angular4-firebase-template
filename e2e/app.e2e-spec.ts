import { PropertyAppAngularPage } from './app.po';

describe('property-app-angular App', () => {
  let page: PropertyAppAngularPage;

  beforeEach(() => {
    page = new PropertyAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

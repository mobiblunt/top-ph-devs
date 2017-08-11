import { TopNigerianDevsPage } from './app.po';

describe('top-nigerian-devs App', function() {
  let page: TopNigerianDevsPage;

  beforeEach(() => {
    page = new TopNigerianDevsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

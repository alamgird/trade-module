import { TradeModulePage } from './app.po';

describe('trade-module App', () => {
  let page: TradeModulePage;

  beforeEach(() => {
    page = new TradeModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

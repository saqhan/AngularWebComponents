import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  const resultZone = element(by.id('sum-value'));
  const testButton = element(by.id('testButton'));

  beforeEach(() => {
    page = new AppPage();
  });



  it('Open page',() => {
    page.navigateTo();
  });


  it('Проверка результата', () => {
    testButton.click();

    expect(
      resultZone.getText()
    ).toEqual(
      '10'
    );
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

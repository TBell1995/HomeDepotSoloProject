import { HDSpecs } from "./homeDepotSpecs";
import { 
    Builder,
    Capabilities, 
    By,
    ThenableWebDriver, 
    Actions,
    WebElement,
    WebDriver,
    Locator,
    Condition
} from "selenium-webdriver"
import { url } from "inspector";

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const myPage = new HDSpecs(driver)

const inStockBox: By = By.xpath('//*[@for= "1z175a5-0"]');
const hideUnavailableProducts: By = By.xpath('//*[@for= "bwo5s-0"]');

afterAll(async () => {
    await (await driver).quit
});

jest.setTimeout(30000)


test('Filters Test', async () => {
    await myPage.navigate();
    await driver.manage().window().maximize();
    await myPage.doSearch('Tape Measure');
    await driver.sleep(1000);
    await driver.findElement(inStockBox).click();
    await driver.sleep(1000);
    await driver.findElement(hideUnavailableProducts).click();
    expect(await myPage.getResults());




});
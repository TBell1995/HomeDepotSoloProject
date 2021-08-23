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

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const myPage = new HDSpecs(driver)

afterAll(async () => {
    await (await driver).quit()
})

jest.setTimeout(30000)

test('Search Band Saw', async () => {
    await myPage.navigate();
    await myPage.doSearch('Band Saw');
});

test('Search Pipe Wrench', async () => {
    await myPage.navigate();
    await myPage.doSearch('Pipe Wrench');
});

test('Search Tape', async () => {
    await myPage.navigate();
    await myPage.doSearch('Tape');
});
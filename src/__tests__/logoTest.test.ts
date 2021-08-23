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

//allDepartments locators
//selector//#header > div.grid.isBound > div.grid.flush.hide.show--sm > div > ul > li:nth-child(1) > a
//xpath//*[@id="header"]/div[1]/div[4]/div/ul/li[1]/a
//full xpath/html/body/div[1]/div[3]/div[1]/div[4]/div/ul/li[1]/a
const allDepartments: By = By.xpath('//*[@data-id= "departmentsFlyout"]');
const homeDecor: By = By.xpath('//*[@id= "homeDecorFurniture"]');
const diyProjects: By = By.xpath('//*[@id= "diyProjectsIdeas"]');
const Logo: By = By.xpath('//*[@class= "Header3__logo"]');
const listsPage: By = By.xpath('//*[@id= "heart2"]');
const cartPage: By = By.xpath('//*[@id= "headerCart"]');

afterAll(async () => {
    await (await driver).quit()
})

jest.setTimeout(30000)

test('Returning Home After Search', async () => {
    await myPage.navigate();
    await myPage.doSearch('Wrench');
    await driver.findElement(Logo).click();
});
test('Returning Home After Navigating To Lists Page', async () => {
    await myPage.navigate();
    await driver.findElement(listsPage).click();
    await driver.findElement(Logo).click();
});
test('Returning Home After Navigating To Cart Page', async () => {
    await myPage.navigate();
    await driver.findElement(cartPage).click();
    await driver.findElement(Logo).click();
});

//test('Logo/Home button', async () => {
  //  await driver.navigate();
    //await driver.findElement(allDepartments).click();
//    await driver.findElement(Logo).click();
  //  await driver.findElement(homeDecor).click();
  //  await driver.findElement(Logo).click();
  //  await driver.findElement(diyProjects).click();
  //  await driver.findElement(Logo).click();

//});
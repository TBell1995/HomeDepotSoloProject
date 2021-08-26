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

const myAccount: By = By.xpath('//*[@id= "headerMyAccountTitle"]');
//The signIn locator is very inconsistant. It will pass one try and fail the next. Looking for a more reliable locator.
const signIn: By = By.xpath('//*[@class= "MyAccount__link MyAccount__link--icon__profile-darkGray"]');
const emailField: By = By.xpath('//*[@id= "email"]');
const passwordField: By = By.xpath('//*[@id= "password-input-field"]');
const signInButton: By = By.xpath('//*[@class= "bttn__content"]');

afterAll(async () => {
    await (await driver).quit
});

jest.setTimeout(30000)

test('Sign in', async () => {
    await myPage.navigate();
    await driver.manage().window().maximize();
    await driver.findElement(myAccount).click();
    await driver.sleep(1000); //driver.sleep seems to help the signIn locator. 
    await driver.findElement(signIn).click();
    await driver.findElement(emailField).sendKeys('fox.gg1221@gmail.com');
    await driver.findElement(passwordField).sendKeys('Lulubean9!');
    await driver.findElement(signInButton).click();

});

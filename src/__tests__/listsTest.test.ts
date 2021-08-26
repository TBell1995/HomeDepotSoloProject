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
const signIn: By = By.xpath('//*[@class= "MyAccount__link MyAccount__link--icon__profile-darkGray"]');
const emailField: By = By.xpath('//*[@id= "email"]');
const passwordField: By = By.xpath('//*[@id= "password-input-field"]');
const signInButton: By = By.xpath('//*[@class= "bttn__content"]');
const favoriteButton: By = By.xpath('//*[@class= "Favorite-icon Favorite-icon--display"]');
const bagsList: By = By.xpath('//*[@class= "tooltip-content__list"]');

afterAll(async () => {
    await (await driver).quit
});

jest.setTimeout(30000)

//Due to the proof of verification after each sign-in this test can not be automated as of right now.
//Working on a way around this. 

test('Add backpack to "Bags" list', async () => {
    await myPage.navigate();
    await driver.manage().window().maximize();
    await driver.findElement(myAccount).click();
    await driver.sleep(1000); 
    await driver.findElement(signIn).click();
    await driver.findElement(emailField).sendKeys('fox.gg1221@gmail.com');
    await driver.findElement(passwordField).sendKeys('Lulubean9!');
    await driver.findElement(signInButton).click();
    await driver.sleep(2000);
    await myPage.doSearch('Tool backpack');
    await driver.findElement(favoriteButton).click();
    await driver.sleep(1000);
    await driver.findElement(bagsList).click();



});

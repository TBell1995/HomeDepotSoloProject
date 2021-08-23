import { By, until, WebDriver } from "selenium-webdriver";

export class HDSpecs {
    driver: WebDriver;
    url: string = "https://www.homedepot.com/";
//*[@id="deliveryStoreAndZip"]/div[1]/a/svg/g/path[3]
    homePage: By = By.xpath('//*[@class= "Header3 Header3-sticky-desktop"]');
    searchBar: By = By.xpath('//*[@class= "SearchBox__input"]');
    searchResults: By = By.xpath('//*[@class= "product-pod--padding"]');


    constructor(driver: WebDriver) {
        this.driver = driver;
    }

async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.homePage));
    await this.driver.wait(
    until.elementIsVisible(await this.driver.findElement(this.homePage))
  );
}
async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
}    
async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
}
async getSearchResults() {
    return this.getText(this.searchResults)
}
async doSearch (searchTerm) {
    let search = await this.driver.findElement(this.searchBar)
    await this.sendKeys(this.searchBar, `${searchTerm}\n`)
    let myText = await this.driver.findElement(this.searchResults).getText();
    await this.getSearchResults();
    expect(myText).toContain(`${searchTerm}`);
    }


}


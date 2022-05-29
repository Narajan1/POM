
class BasePage {

  constructor(driver) {
    this.driver = driver;
  };

  async find(locator) {
    return this.driver.findElement(locator);
  };

  async click(locator) {
    let element = await this.find(locator);
    element.click();
  };

  async type(locator, inputText) {
    let element = await this.find(locator);
    element.sendKeys(inputText);
  };

  async isDisplayed(locator) {
    let element = await this.find(locator);
    if(element.isDisplayed()){
      return true;
    };
  };

};

module.exports = BasePage;






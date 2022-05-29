const BasePage = require("./basePage");
//const Urls = require("../Source/Urls");
//const { Builder, Browser, By, Key, until } = require("selenium-webdriver");


const searchBox = { css: "input[name='q']" };
const searchBtn = { css: "input[name='btnK']" };

class HomePage extends BasePage {
    constructor(driver, targetUrl = "https://www.google.com/") {
        super(driver);
        this.targetUrl = targetUrl;
    };

    async getPage() {
        await this.driver.navigate().to(this.targetUrl);
    };

    async inputSearchText(text) {
        await this.isDisplayed(searchBox);
        await this.type(searchBox, text);
        await this.click(searchBtn);
    }

};

module.exports = HomePage;
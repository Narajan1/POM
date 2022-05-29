const webdriver = require("selenium-webdriver");
const chrome = require("chromedriver");
const should = require('chai').should();
const HomePage = require("../Pages/homePage");
const driver = new webdriver.Builder().forBrowser('chrome').build();

const homePage = new HomePage(driver);

describe("Scenario 1: Search text in homepage", async function () {

    before('Manage the driver', async () => {
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ implicit: 10000 });
    });

    it("should check Url", async () => {
        await homePage.getPage();
        //Get currentUrl
        let currentUrl = await driver.getCurrentUrl();
        //Assert url
        currentUrl.should.equal(homePage.targetUrl);
    });

    it("should check result page", async () => {

        await homePage.inputSearchText("Tesvan");

        let title = await driver.getTitle();
        title.should.be.equal('Google');

    });

    after(async () => driver.quit());
});

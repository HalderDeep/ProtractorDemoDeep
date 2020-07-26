import { browser } from "protractor";
import { HomePageObject } from "../pageModules/homePage";
const { Then, Given, When, And } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const homePage: HomePageObject = new HomePageObject();

// tslint:disable-next-line: only-arrow-functions
Given(/^I am on calculator home page$/, {timeout: 2 * 5000}, async function() {
     await  browser.sleep(6000);
     await expect(homePage.HomePageHeading.getText()).to.eventually.equal("Super Calculator");
   });

// tslint:disable-next-line: only-arrow-functions
When(/^I add numbers "(.*?)" and "(.*?)"$/, async function(text1, text2) {
     await homePage.inputValue1.sendKeys(text1);
     await homePage.inputValue2.sendKeys(text2);
   });

// tslint:disable-next-line: only-arrow-functions
When(/^I click on Go Button$/, async function() {
     await homePage.Go.click();
   });

// tslint:disable-next-line: only-arrow-functions
Then(/^I should see result as "(.*?)"$/, async function(text) {
     await  browser.sleep(4500);
     await expect(homePage.result.getText()).to.eventually.equal(text);
   });

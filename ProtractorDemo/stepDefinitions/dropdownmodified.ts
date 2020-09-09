import { HomePageObject } from "../pageModules/homePage";
import { ExcelCon } from "../testData/excelCon";

const { Then, Given, When, And } = require("cucumber");
const {browser} = require("protractor");
const fs = require("fs");

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;

import testdataJson from "../testData/testdata";

const homePage: HomePageObject = new HomePageObject();

Given(/^I am on dropdown page$/, async function() {
    await expect(homePage.HomePageHeading.getText()).to.eventually.equal("Super Calculator");
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });

// tslint:disable-next-line: only-arrow-functions
Then(/^I should see all operators in dropdown$/, async function() {
    const excelCon: ExcelCon = new ExcelCon("Column 3");

    await browser.sleep(5000);

    for (let i = 0; i < (await excelCon.sDataArray).length; i++) {
      await expect(homePage.dropdown.get(i).getText()).to.eventually.equal(excelCon.sDataArray[i]);
      await homePage.dropdown.get(i).click();
	   await browser.sleep(5000);

    }

    await homePage.dropdownclick.click();
  });

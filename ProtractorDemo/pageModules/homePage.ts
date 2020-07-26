import { $, by, element, ElementArrayFinder, ElementFinder } from "protractor";

import testdataJson from "../testData/testdata";

export class HomePageObject {
    public inputValue1: ElementFinder;
    public inputValue2: ElementFinder;
    public Go: ElementFinder;
    public HomePageHeading: ElementFinder;
    public result: ElementFinder;
    public dropdown: ElementArrayFinder;
    public dropdownclick: ElementFinder;
    public loginidElement: ElementFinder;

    constructor() {
        this.inputValue1 = $("input[ng-model='first']");
        this.inputValue2 = $("input[ng-model='second']");
        this.Go = element(by.id("gobutton"));
        this.HomePageHeading = element(by.xpath("/html/body/div/div/h3"));
        this.result = element(by.xpath("/html/body/div/div/form/h2"));
        this.dropdown = element.all(by.xpath("/html/body/div/div/form/select/option"));
        this.dropdownclick = element(by.model("operator"));
        this.loginidElement = element(by.xpath(testdataJson.testcase1.valueDataXPATH));
    }
}

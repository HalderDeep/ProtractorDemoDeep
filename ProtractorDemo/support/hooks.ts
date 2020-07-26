import { After, AfterAll, BeforeAll, Status } from "cucumber";
import { browser } from "protractor";
import { config } from "../config/config";

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED || scenario.result.status === Status.PASSED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});

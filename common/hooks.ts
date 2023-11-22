import {After, AfterAll, Before, BeforeAll, ITestCaseHookParameter, setDefaultTimeout, Status} from "@cucumber/cucumber"
import logger from "../utils/logger"
import scope from "./scope"
import appConfig from "../utils/appConfig"
import { chromium, firefox } from "playwright"
import helper from "../utils/helper"
import {OurWorld} from "./types"

setDefaultTimeout(appConfig.cucumberTimeout)

BeforeAll(async function() {
    logger.info("Starting the testsuite execution")

    //Set View port
    scope.viewPort = {}
    scope.viewPort.width = 1889
    scope.viewPort.height = 970

    await resolveBrowser()
})

AfterAll(async function () {
   await scope.browser.close()
})

Before(async function(testCase: ITestCaseHookParameter) {
    logger.info("Executing scenario: \"%s\"", testCase.pickle.name)
    scope.context = await scope.browser.newContext({
        ignoreHTTPSErrors: true,
        viewport: {'width': scope.viewPort.width, 'height': scope.viewPort.height}
    })
    scope.page = await scope.browser.newPage({
        viewport: {'width': scope.viewPort.width, 'height': scope.viewPort.height}
    })
    scope.page.setDefaultTimeout(appConfig.playwrightPageDefaultTimeout)
})

After(async function(this: OurWorld, testCase: ITestCaseHookParameter) {
    logger.info("The status of the test case is:= %s", testCase.result?.status)
    if (testCase.result?.status !== Status.PASSED) {
        try {
            await helper.captureScreenshot(this)
        }
        catch (err) {
            logger.error("Unable to take screenshot, something went wrong")
        }
    }

    await Promise.all([
        scope.page.close(),
        scope.context.close()
    ])
})

const resolveBrowser = async() => {

    const launchOptions: any = {
        headless: appConfig.headless,
        slowMo: 0
    }

    logger.info("Starting \"%s\" browser for test execution", process.env.BROWSER_TYPE)
    switch(process.env.BROWSER_TYPE) {
        case 'chrome':
            launchOptions.devtools = appConfig.devtools
            launchOptions.channel = 'chrome'
            scope.browser = await chromium.launch(launchOptions)
            break
        case 'firefox':
            scope.browser = await firefox.launch(launchOptions)
    }

}
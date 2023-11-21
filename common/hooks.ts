import { After, AfterAll, Before, BeforeAll, ITestCaseHookParameter } from "@cucumber/cucumber"
import logger from "../utils/logger"
import scope from "./scope"
import appConfig from "../utils/appConfig"
import { chromium, firefox } from "playwright"

BeforeAll(async function() {
    logger.info("Starting the testsuite execution")

    //Set View port
    scope.viewPort = {}
    scope.viewPort.width = 1889
    scope.viewPort.height = 970

    await resolveBrowser()
})

AfterAll(async function () {
    scope.browser.close()
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

After(async function(testCase: ITestCaseHookParameter) {
    logger.info("The status of the test case is:= %s", testCase.result?.status)    
})

const resolveBrowser = async() => {

    const lanuchOptions: any = {
        headless: appConfig.headless,
        slowMo: 250
    }

    logger.info("Starting \"%s\" browser for test execution", process.env.BROWSER_TYPE)
    switch(process.env.BROWSER_TYPE) {
        case 'chrome':
            lanuchOptions.devtools = appConfig.devtools
            lanuchOptions.channel = 'chrome'
            scope.browser = await chromium.launch(lanuchOptions)
            break
        case 'firefox':
            scope.browser = await firefox.launch(lanuchOptions)
    }

}
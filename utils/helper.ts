import scope from "../common/scope"
import appConfig from "./appConfig"
import logger from "./logger"

class Helper {

    launchApplicationUrl = async () => {
        await scope.page.goto(appConfig.baseUrl)
        await scope.page.waitForLoadState("networkidle")
        await scope.page.waitForLoadState("domcontentloaded")
        logger.info("Application launched successfully")
    }

    //Hard wait method for local development, incase required.
    wait = async (seconds: number) => {
        logger.info("Waiting for %s seconds to application to respond", seconds)
        const sleep: any = (ms: number) => new Promise((r: any) => setTimeout(r, ms))
        await sleep(1000 * seconds)
    }

    getLocator = async (selector: string) => {
        return scope.page.locator(selector)
    }

    selectDropdownOption = async(selector: string, value: string) => {
        await scope.page.selectOption(selector, value)
    }

}

export default new Helper()
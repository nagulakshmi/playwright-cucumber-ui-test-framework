import { Browser, BrowserContext, Page } from "playwright";

class ApplicationScope {
    context: BrowserContext
    page: Page
    browser: Browser
    viewPort: any
}

export default new ApplicationScope()
import config from 'config'

class AppConfiguration {
    baseUrl: string
    headless: boolean
    devtools: boolean
    playwrightPageDefaultTimeout: number
    cucumberTimeout: number

    constructor() {
        this.baseUrl = config.get("baseUrl")
        this.headless = process.env.HEADLESS === 'true'
        this.devtools = process.env.DEV_TOOLS === 'true'
        this.playwrightPageDefaultTimeout = config.get("playwrightPageDefaultTimeout")
        this.cucumberTimeout = config.get("cucumberTimeout")
    }
}

export default new AppConfiguration()
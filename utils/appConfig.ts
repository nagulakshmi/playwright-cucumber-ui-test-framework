import config from 'config'

class AppConfiguration {
    baseUrl: string
    headless: boolean
    devtools: boolean
    playwrightPageDefaultTimeout: number

    constructor() {
        this.baseUrl = config.get("baseUrl")
        this.headless = process.env.HEADLESS === 'true'
        this.devtools = process.env.DEV_TOOLS === 'true'
        this.playwrightPageDefaultTimeout = config.get("playwrightPageDefaultTimeout")
    }
}

export default new AppConfiguration()
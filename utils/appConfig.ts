import config from 'config'

class AppConfiguration {
    baseUrl: string

    constructor() {
        this.baseUrl = config.get("baseUrl")
    }
}

export default new AppConfiguration()
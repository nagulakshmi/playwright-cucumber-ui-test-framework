import helper from "../utils/helper"
import logger from "../utils/logger"

const {Given, setDefaultTimeout} = require("@cucumber/cucumber")

Given('I launch borrowing capacity calculator application', async () => {
    logger.info("Launch the application")
    await helper.launchApplicationUrl()
})
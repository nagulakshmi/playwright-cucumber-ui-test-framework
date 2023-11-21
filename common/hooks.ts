import { BeforeAll } from "@cucumber/cucumber";
import logger from "../utils/logger";

BeforeAll(async function() {
    logger.info("Starting the testsuite execution")
})
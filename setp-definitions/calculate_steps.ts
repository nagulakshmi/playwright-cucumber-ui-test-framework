import calculatePage from "../pages/CalculatePage"
import {When, Then} from "@cucumber/cucumber"
import helper from "../utils/helper"
import {OurWorld} from "../common/types"
import ex = CSS.ex

Then('I select {string} as application type', async (applicationType) => {
    await calculatePage.selectApplicationType(applicationType)
})

Then('I select {string} as number of dependents', async (expectedValue) => {
    await calculatePage.selectDependentDropdown(expectedValue)
})

Then('I select {string} as property you would like to buy', async (propertyType) => {
    await calculatePage.selectPropertyType(propertyType)
})

Then('I enter {string} as {string}', async (labelText, income) => {
    await calculatePage.enterIncomeBeforeTax(labelText, income)
})

When('I click on {string} to calculate', async (estimate: string) => {
    await calculatePage.clickOnWorkoutBorrow()
})

Then('I should see borrowing estimate as {string}', async (borrowingEstimate) => {
    await calculatePage.verifyEstimateOutcome(borrowingEstimate)
})

Then('I capture the current screen for reference', async function (this: OurWorld) {
    await helper.captureScreenshot(this)
})

When('I click on {string} button', async (startOver) => {
    await calculatePage.clickOnStartOver()
})
import calculatePage from "../pages/CalculatePage"
import {When, Then} from "@cucumber/cucumber"

Then('I select {string} as application type', async (applicationType) => {
    calculatePage.selectApplicationType(applicationType)
})

Then('I select {string} as number of dependents', async (expectedValue) => {
    calculatePage.selectDependentDropdown(expectedValue)
})

Then('I select {string} as property you would like to buy', async (propertyType) => {
    calculatePage.selectPropertyType(propertyType)
})

Then('I enter {string} as {string}', async (labelText, income) => {
    calculatePage.enterIncomeBeforeTax(labelText, income)
})

Then('I feed {string} as {string}', async (labelText, value) => {
})

When('I click on {string} to calculate', async (buttonName) => {
})

Then('I should see borrowing estimate as {string}', async (borrowingEstimate) => {
})

Then('I capture the current screen for reference', async () => {
})

When('I click on {string} button', async (elementLabel) => {
})

Then('I should see {string} as {string}', async (question, expectedValue) => {
})

Then('I should see Number of dependants as {string}', async (value) => {
})

Then('It should display {string} as {string}', async (question, expectedValue) => {
})

Then('It should show {string} as {string}', async (labelText, expectedValue) => {

})
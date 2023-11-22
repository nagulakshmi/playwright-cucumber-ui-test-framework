import scope from "../common/scope"
import helper from "../utils/helper"
import {expect} from "playwright/test"

interface CalculatePageLocators {
    dependentDropDown:  string
    workoutButton: string
    outcome: string
    startOver: string
}

class CalculatePage {
    locators: CalculatePageLocators

    constructor() {
        this.locators = {
            dependentDropDown: 'select[title="Number of dependants"]',
            workoutButton: 'button[id="btnBorrowCalculater"]',
            outcome: 'span[id="borrowResultTextAmount"]',
            startOver: 'button[class="start-over"]'
        }
    }

    selectApplicationType = async(applicantType: string) => {
        await scope.page.getByRole('radio', { name: applicantType }).click()
    }

    selectDependentDropdown = async(numberOfDependents: string) => {
        await helper.selectDropdownOption(this.locators.dependentDropDown, numberOfDependents)
    }

    selectPropertyType = async(propertyType: string) => {
        await scope.page.getByRole('radio', { name: propertyType }).click()
    }

    enterIncomeBeforeTax = async(label: string, income: string) => {
        await scope.page.getByLabel(label).fill(income)
    }

    clickOnWorkoutBorrow = async () => {
        await scope.page.locator(this.locators.workoutButton).click()
    }

    verifyEstimateOutcome = async (expectedOutcome: string) => {
        await helper.wait(2) //force wait complete the out value animation
        const actual = await scope.page.locator(this.locators.outcome).innerText()
        expect(actual).toBe(expectedOutcome)
    }

    clickOnStartOver = async () => {
        await scope.page.locator(this.locators.startOver).first().click()
    }

    verifyApplicationType = async (applicantType: string, expected: string) => {
        const value = await scope.page.getByRole('radio', { name: applicantType }).innerText()
        expect(value).toBe(expected)
    }
}

export default new CalculatePage()
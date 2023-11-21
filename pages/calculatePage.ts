import scope from "../common/scope"
import helper from "../utils/helper"

interface CalculatePageLocators {
    dependentDropDown:  string
    annualIncome: string
}

class CalculatePage {
    locators: CalculatePageLocators

    constructor() {
        this.locators = {
            dependentDropDown: 'select[title="Number of dependants"]'
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
        await scope.page.getByLabel(label).fill(income);
    }
}

export default new CalculatePage()
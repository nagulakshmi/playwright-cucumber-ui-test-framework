Feature: Test ANZ Borrowing capacity calculator

  Background:
    Given I launch borrowing capacity calculator application

  @smoke
  Scenario: Verify Single Borrower Calculation
    Then I select "Single" as application type
    And I select "0" as number of dependents
    And I select "Home to live in" as property you would like to buy
    And I enter "Your annual income (before tax)" as "80000"
    And I enter "Your annual other income (optional)" as "10000"
    And I enter "Monthly living expenses" as "500"
    And I enter "Current home loan monthly repayments " as "0"
    And I enter "Other loan monthly repayments" as "140"
    And I enter "Other monthly commitments" as "0"
    And I enter "Total credit card limits" as "10000"
    When I click on "Work out how much I could borrow" to calculate
    Then I should see borrowing estimate as "$408,000"
    And I capture the current screen for reference

  @smoke
  Scenario: Start Joint Borrowing calculator
    Then I select "Joint" as application type
    And I select "2" as number of dependents
    And I select "Residential investment" as property you would like to buy
    And I enter "Your annual income (before tax)" as "180000"
    And I enter "Your annual other income (optional)" as "5000"
    And I enter "2nd applicant's annual income (before tax)" as "160000"
    And I enter "2nd applicant's annual other income" as "10000"
    And I enter "Monthly living expenses" as "1500"
    And I enter "Current home loan monthly repayments" as "2200"
    And I enter "Other loan monthly repayments" as "340"
    And I enter "Other monthly commitments" as "100"
    And I enter "Total credit card limits" as "6000"
    When I click on "Work out how much I could borrow" to calculate
    Then I should see borrowing estimate as "$1,246,000"
    And I capture the current screen for reference
    When I click on "Start over" button
    Then I capture the current screen for reference

  @smoke
  Scenario:  Test to capture error scenario
    Then I select "Single" as application type
    And I select "0" as number of dependents
    And I select "Home to live in" as property you would like to buy
    And I enter "Your annual income (before tax)" as "80000"
    And I enter "Your annual other income (optional)" as "10000"
    And I enter "Monthly living expenses" as "500"
    And I enter "Current home loan monthly repayments" as "0"
    And I enter "Other loan monthly repayments" as "140"
    And I enter "Other monthly commitments" as "0"
    And I enter "Total credit card limits" as "10000"
    When I click on "Work out how much I could borrow" to calculate
    Then I should see borrowing estimate as "$408,000"
    And I capture the current screen for reference
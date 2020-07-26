@Feature1
Feature: To check Functionality of calculator

@Add
Scenario: Add two numbers
Given I am on calculator home page
When I add numbers "6" and "2"
And I click on Go Button
Then I should see result as "8"
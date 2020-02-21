Feature: Search functionality


Scenario: Using the search input
Given I am on wanago homepage
When I fill the search input with the "Cypress" word
And I click on the submit button
Then I should be redirected to a search page with the results of the "Cypress" search

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const url = "https://wanago.io/";

Given('I am on wanago homepage',()=>{
    cy.visit(url);
})

When('I fill the search input with the {string} word', (word) => {
    cy.get('.search-field').type(word);
  });
  
And('I click on the submit button', () => {
    cy.get('.search-submit').click();
});  

Then('I should be redirected to a search page with the results of the {string} search', (term) => {
    cy.get('.content-box .post-title--archive span').should('contain.text', term);
});
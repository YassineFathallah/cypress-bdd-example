import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const url = "https://www.saucedemo.com/index.html";

Given('I am in the Swag Labs login page',()=>{
    cy.visit(url);
 
})
 
When('I enter valid credentials',()=>{
    cy.get('[data-test=username]').type("standard_user");
    cy.get('[data-test=password]').type("secret_sauce");
    cy.get('.btn_action').click();  
})
 
Then('I should be able to login successfully',()=>{
    cy.get('.bm-burger-button > button').click();
    cy.get('#logout_sidebar_link').click(); 
 
})
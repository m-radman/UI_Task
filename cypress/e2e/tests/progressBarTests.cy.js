/// <reference types="cypress" />

import progressBarPage from "../pages/progressBarPage"
import { SUCCESS_COLOR_CODE, IN_PROGRESS_COLOR_CODE } from "../../support/constants"

describe("Test progress bar functionality", () => {

    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl") + "progress-bar")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        /* 
         * If uncaught exception is detected we will 
         *  prevent Cypress from failing the test
         *  this has to do with CROSS ORIGIN thing 
         *  and QA demo website specifically
         */
         return false
    })

    it("Confirm progress bar completes 100% successfully", () => {
        progressBarPage.elements.startStopBtn().click()
        cy.wait(10000)
        progressBarPage.elements.progressBar().should("have.text", "100%")
        progressBarPage.elements.progressBar().should("have.css", "background-color", SUCCESS_COLOR_CODE)
        progressBarPage.elements.startStopBtn().should("not.exist")
        progressBarPage.elements.resetBtn().should("exist").and("be.visible")
    })

    it("Confirm progress bar can be paused and continued to completion", () => {
        progressBarPage.elements.startStopBtn().click()
        cy.wait(4900)
        progressBarPage.elements.startStopBtn().click()
        progressBarPage.elements.progressBar().should("have.text", "50%")
        progressBarPage.elements.progressBar().should("have.css", "background-color", IN_PROGRESS_COLOR_CODE)

        progressBarPage.elements.startStopBtn().click()
        cy.wait(5000)
        progressBarPage.elements.progressBar().should("have.text", "100%")
        progressBarPage.elements.progressBar().should("have.css", "background-color", SUCCESS_COLOR_CODE)
        progressBarPage.elements.resetBtn().should("exist").and("be.visible")
    })

    it("Confirm progress bar can be reseted to start state after completion", () => {
        progressBarPage.elements.startStopBtn().click()
        cy.wait(10000)
        progressBarPage.elements.startStopBtn().should("not.exist")

        progressBarPage.elements.resetBtn().click()
        progressBarPage.elements.startStopBtn().should("exist").and("be.visible")
        progressBarPage.elements.progressBar().should("have.text", "0%")
    })
})
/// <reference types="cypress" />

import progressBarPage from "../pages/progressBarPage"
import { SUCCESS_COLOR_CODE, IN_PROGRESS_COLOR_CODE, FULL_TIME, HALF_TIME } from "../../support/constants"

describe("Test progress bar functionality", () => {

    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl") + "progress-bar")
    })

    it("Progress bar completes 100% successfully", () => {
        progressBarPage.elements.startStopBtn().click()
        cy.wait(FULL_TIME)

        // assert progress bar reached 100% and reset button appeared
        progressBarPage.elements.progressBar().should("have.text", "100%")
        progressBarPage.elements.progressBar().should("have.css", "background-color", SUCCESS_COLOR_CODE)
        progressBarPage.elements.startStopBtn().should("not.exist")
        progressBarPage.elements.resetBtn().should("exist").and("be.visible")
    })

    it("Confirm progress bar can be paused and continued to completion", () => {
        progressBarPage.elements.startStopBtn().click()
        cy.wait(HALF_TIME)

        // assert progress bar is half way to completion
        progressBarPage.elements.startStopBtn().click()
        progressBarPage.elements.progressBar().should("have.text", "50%")
        progressBarPage.elements.progressBar().should("have.css", "background-color", IN_PROGRESS_COLOR_CODE)

        progressBarPage.elements.startStopBtn().click()
        cy.wait(HALF_TIME)

        // assert progress bar reached 100% and reset button appeared
        progressBarPage.elements.progressBar().should("have.text", "100%")
        progressBarPage.elements.progressBar().should("have.css", "background-color", SUCCESS_COLOR_CODE)
        progressBarPage.elements.resetBtn().should("exist").and("be.visible")
    })

    it("Confirm progress bar can be reseted to initial state after completion", () => {
        progressBarPage.elements.startStopBtn().click()
        cy.wait(FULL_TIME)

        // expect STOP button to be replaced with RESET button
        progressBarPage.elements.startStopBtn().should("not.exist")
        progressBarPage.elements.resetBtn().should("exist")

        // reset the progress 
        progressBarPage.elements.resetBtn().click()

        // assert everything is returned to initial state
        progressBarPage.elements.progressBar().should("have.text", "0%")
        progressBarPage.elements.startStopBtn().should("exist").and("be.visible")
    })
})
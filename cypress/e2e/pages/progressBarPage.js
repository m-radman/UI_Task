class ProgressBarPage {
    elements = {
        progressBar: () => cy.get('[role="progressbar"]'),
        startStopBtn: () => cy.get("#startStopButton"),
        resetBtn: () => cy.get("#resetButton")
    }
}

export default new ProgressBarPage()
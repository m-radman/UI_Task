class StudentModal {
    elements = {
        modalTitle: () => cy.get("#example-modal-sizes-title-lg"),
        valuesList: () => cy.get("tbody > tr > td:last-child"),
        closeModalBtn: () => cy.get("#closeLargeModal")
    }
}

export default new StudentModal()
class TablePage {
    firstNameColumnIndex = 0
    lastNameColumnIndex = 1
    ageColumnIndex = 2
    emailColumnIndex = 3
    salaryColumnIndex = 4
    departmentColumnIndex = 5

    elements = {
        addBtn: () => cy.get("#addNewRecordButton"),
        editBtn: () => cy.get("#edit-record-1"),
        row: (row_no) => cy.get(`[role="rowgroup"]:nth-child(${row_no}) [role="gridcell"]`)
    }

    getCell(row_no = 1, columnName) {
        return this.elements.row(row_no).eq(this.mapToColumn(columnName))
    }
    
    mapToColumn(columnName) {
        if (columnName === "first") {
            return this.firstNameColumnIndex
        } else if (columnName === "last") {
            return this.lastNameColumnIndex
        } else if (columnName === "age") {
            return this.ageColumnIndex
        } else if (columnName === "email") {
            return this.emailColumnIndex
        } else if (columnName === "salary") {
            return this.salaryColumnIndex
        } else if (columnName === "department") {
            return this.departmentColumnIndex
        }
    }
}

export default new TablePage()
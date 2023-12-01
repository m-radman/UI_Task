class TablePage {
    FIRST_NAME_COL = 0
    LAST_NAME_COL = 1
    AGE_COL = 2
    EMAIL_COL = 3
    SALARY_COL = 4
    DEPARTMENT_COL = 5

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
            return this.FIRST_NAME_COL
        } else if (columnName === "last") {
            return this.LAST_NAME_COL
        } else if (columnName === "age") {
            return this.AGE_COL
        } else if (columnName === "email") {
            return this.EMAIL_COL
        } else if (columnName === "salary") {
            return this.SALARY_COL
        } else if (columnName === "department") {
            return this.DEPARTMENT_COL
        } else {
            throw new Error("Unexpected column name!")
        } 
    }
}

export default new TablePage()
class EmployeeRegistrationForm {
    elements = {
        firstNameField: () => cy.get("#firstName"),
        lastNameField: () => cy.get("#lastName"),
        emailField: () => cy.get("#userEmail"),
        ageField: () => cy.get("#age"),
        salaryField: () => cy.get("#salary"),
        departmentField: () => cy.get("#department"),
        submitBtn: () => cy.get("#submit"),
        validatedForm: () => cy.get(".was-validated")
    }

    addEmployee(employeeData) {
        this.elements.firstNameField().type(employeeData.firstName)
        this.elements.lastNameField().type(employeeData.lastName)
        this.elements.emailField().type(employeeData.email)
        if(employeeData.age != null) {
            this.elements.ageField().type(employeeData.age)
        }
        this.elements.salaryField().type(employeeData.salary)
        this.elements.departmentField().type(employeeData.department)
        this.elements.submitBtn().click()
    }

    editEmployeeJob(updateInfo) {
        this.elements.salaryField().clear().type(updateInfo.salary)
        this.elements.departmentField().clear().type(updateInfo.department)
        this.elements.submitBtn().click()
    }
}

export default new EmployeeRegistrationForm()
/// <reference types="cypress" />

import tablePage from "../pages/tablePage"
import employeeRegistrationForm from "../pages/employeeRegistrationForm"
import employeeFaker from "../fakers/employeeFaker"

import { ERROR_COLOR_CODE } from "../../support/constants"

describe("Testing table functionalities", () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl") + "webtables")
    })

    it("Add new employee successfully", () => {
        // prepare new employee data
        const newEmployee = employeeFaker.generateValidEmployee()

        // add new employee
        tablePage.elements.addBtn().click()
        employeeRegistrationForm.addEmployee(newEmployee)

        // validate newly added employee
        tablePage.getCell(4, "first").should("have.text", newEmployee.firstName)
        tablePage.getCell(4, "last").should("have.text", newEmployee.lastName)
        tablePage.getCell(4, "email").should("have.text", newEmployee.email)
        tablePage.getCell(4, "age").should("have.text", newEmployee.age)
        tablePage.getCell(4, "salary").should("have.text", newEmployee.salary)
        tablePage.getCell(4, "department").should("have.text", newEmployee.department)
    })

    it("Fail to add employee without entered age", () => {
        // prepare employee data
        const invalidEmployee = employeeFaker.generateEmployeeWithoutAge()

        // attempt to add employee with age not filled
        tablePage.elements.addBtn().click()
        employeeRegistrationForm.addEmployee(invalidEmployee)

        // expect error
        employeeRegistrationForm.elements.ageField().should("have.css", "border-color", ERROR_COLOR_CODE).and("be.empty")
    })

    it("Fail to add employee with invalid salary input", () => {
        // prepare employee data 
        const invalidEmployee = employeeFaker.generateEmployeeWithInvalidSalary()

        // attempt to add employee with invalid salary
        tablePage.elements.addBtn().click()
        employeeRegistrationForm.addEmployee(invalidEmployee)

        // expect error 
        employeeRegistrationForm.elements.salaryField().should("have.css", "border-color", ERROR_COLOR_CODE).and("contain.value", invalidEmployee.salary)
    })

    it("Fail to add employee with blank fields", () => {
        // attempt to add employee with no input at all
        tablePage.elements.addBtn().click()

        employeeRegistrationForm.elements.validatedForm().should("not.exist")
        employeeRegistrationForm.elements.submitBtn().click()

        // expect employee not added & form validation errors
        employeeRegistrationForm.elements.validatedForm().should("exist")
        employeeRegistrationForm.elements.firstNameField().should("have.css", "border-color", ERROR_COLOR_CODE)
        employeeRegistrationForm.elements.lastNameField().should("have.css", "border-color", ERROR_COLOR_CODE)
        employeeRegistrationForm.elements.emailField().should("have.css", "border-color", ERROR_COLOR_CODE)
        employeeRegistrationForm.elements.ageField().should("have.css", "border-color", ERROR_COLOR_CODE)
        employeeRegistrationForm.elements.salaryField().should("have.css", "border-color", ERROR_COLOR_CODE)
        employeeRegistrationForm.elements.departmentField().should("have.css", "border-color", ERROR_COLOR_CODE)
    })

    it("Validate age field does not accept more than two digits", () => {
        tablePage.elements.addBtn().click()

        // enter three digit number into age field and expect only two to remain
        employeeRegistrationForm.elements.ageField().type("345").invoke("val").should("have.lengthOf", "2").and("eql", "34")
    })

    it("Validate email field does not accept invalid email format", () => {
        cy.fixture("invalidEmails").then((fixture) => {
            fixture.emails.forEach((email) => {
                cy.visit(Cypress.env("baseUrl") + "webtables")

                // attempt to enter invalid email
                tablePage.elements.addBtn().click()
                employeeRegistrationForm.elements.emailField().type(email)
                employeeRegistrationForm.elements.submitBtn().click()

                // expect validation error for email input
                employeeRegistrationForm.elements.emailField().should("have.css", "border-color", ERROR_COLOR_CODE)
            })
        })
    })

    it("Update employee info successfully", () => {
        const employeeUpdate = employeeFaker.generateEmployeeSalaryAndDepartment()

        // attempt to update employee details
        tablePage.elements.editBtn().click()
        employeeRegistrationForm.editEmployeeSalaryAndDepartment(employeeUpdate)

        // expect details to be updated successfully
        tablePage.getCell(1, "salary").should("have.text", employeeUpdate.salary)
        tablePage.getCell(1, "department").should("have.text", employeeUpdate.department)
    })
})
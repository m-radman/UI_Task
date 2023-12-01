/// <reference types="cypress" />

import tablePage from "../pages/tablePage"
import employeeRegistrationForm from "../pages/employeeRegistrationForm"
import { ERROR_COLOR_CODE, SUCCESS_COLOR_CODE } from "../../support/constants"
import employeeFaker from "../fakers/employeeFaker"

describe("Testing table functionalities", () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env("tableUrl"))
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

    it("Add new employee successfully", () => {
        const newEmployee = employeeFaker.generateValidEmployee()

        tablePage.elements.addBtn().click()

        employeeRegistrationForm.addEmployee(newEmployee)

        tablePage.getCell(4, "first").should("have.text", newEmployee.firstName)
        tablePage.getCell(4, "last").should("have.text", newEmployee.lastName)
        tablePage.getCell(4, "email").should("have.text", newEmployee.email)
        tablePage.getCell(4, "age").should("have.text", newEmployee.age)
        tablePage.getCell(4, "salary").should("have.text", newEmployee.salary)
        tablePage.getCell(4, "department").should("have.text", newEmployee.department)
    })

    it("Fail to add employee without entered age", () => {
        const invalidEmployee = employeeFaker.generateEmployeeWithoutAge()

        tablePage.elements.addBtn().click()

        employeeRegistrationForm.addEmployee(invalidEmployee)

        employeeRegistrationForm.elements.ageField().should("have.css", "border-color", ERROR_COLOR_CODE).and("be.empty")
    })

    it("Fail to add employee with invalid salary input", () => {
        const invalidEmployee = employeeFaker.generateEmployeeWithInvalidSalary()

        tablePage.elements.addBtn().click()

        employeeRegistrationForm.addEmployee(invalidEmployee)

        employeeRegistrationForm.elements.salaryField().should("have.css", "border-color", ERROR_COLOR_CODE).and("contain.value", invalidEmployee.salary)
    })

    it("Fail to add employee with blank fields", () => {
        tablePage.elements.addBtn().click()

        employeeRegistrationForm.elements.validatedForm().should("not.exist")
        employeeRegistrationForm.elements.submitBtn().click()
        employeeRegistrationForm.elements.validatedForm().should("exist")
    })

    it("Verify age field does not accept more than two digits", () => {
        tablePage.elements.addBtn().click()

        employeeRegistrationForm.elements.ageField().type("345").invoke("val").should("have.lengthOf", "2").and("eql", "34")
    })

    it("Verify email field does not accept invalid email format", () => {
        cy.fixture("invalidEmails").then((fixture) => {
            fixture.emails.forEach((email) => {
                cy.visit(Cypress.env("tableUrl"))

                tablePage.elements.addBtn().click()
    
                employeeRegistrationForm.elements.emailField().type(email)
                employeeRegistrationForm.elements.submitBtn().click()
                employeeRegistrationForm.elements.emailField().should("have.css", "border-color", ERROR_COLOR_CODE)
            })
        })
    })

    it.only("Update employee info successfully", () => {
        const employeeUpdate = employeeFaker.updateEmployeeJob()

        tablePage.elements.editBtn().click()

        employeeRegistrationForm.editEmployeeJob(employeeUpdate)

        tablePage.getCell(1, "salary").should("have.text", employeeUpdate.salary)
        tablePage.getCell(1, "department").should("have.text", employeeUpdate.department)
    })
})
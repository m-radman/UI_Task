/// <reference types="cypress" />

import practiceFormPage from "../pages/practiceFormPage"
import studentModal from "../pages/studentModal"
import studentFaker from "../fakers/studentFaker"

describe("Student registration form tests", () => {

    before(() => {
        cy.visit(Cypress.env("baseUrl") + "automation-practice-form")

        // expanding the viewport so "state" and "city" dropdown options would be visible
        cy.viewport(1200, 1200)
    })

    it("Fill form with valid data and register student successfully", () => {
        // prepare student data for form input
        const newStudent = studentFaker.generateValidStudent()

        // fill in the form input with student data
        practiceFormPage.elements.firstNameField().type(newStudent.firstName)
        practiceFormPage.elements.lastNameField().type(newStudent.lastName)
        practiceFormPage.elements.emailField().type(newStudent.email)
        practiceFormPage.selectGenderOption(newStudent.gender)
        practiceFormPage.elements.mobileNumberField().type(newStudent.mobileNum)
        practiceFormPage.selectDateOfBirth(newStudent.dateOfBirth.day, newStudent.dateOfBirth.month, newStudent.dateOfBirth.year)
        practiceFormPage.enterSubjects(newStudent.subjects)
        practiceFormPage.checkHobbyOption(newStudent.hobby)
        practiceFormPage.elements.uploadPictureInput().selectFile(newStudent.picture)
        practiceFormPage.elements.currentAddressField().type(newStudent.address)
        practiceFormPage.selectState(newStudent.state)
        practiceFormPage.selectCity(newStudent.city)

        // submit the form
        practiceFormPage.elements.submitBtn().click({ force: true })

        // expect student created & newly created student details displayed in the modal
        studentModal.elements.modalTitle().should("be.visible")
        studentModal.elements.valuesList().eq(0).should("have.text", `${newStudent.firstName} ${newStudent.lastName}`)
        studentModal.elements.valuesList().eq(1).should("have.text", `${newStudent.email}`)
        studentModal.elements.valuesList().eq(2).should("have.text", newStudent.gender)
        studentModal.elements.valuesList().eq(3).should("have.text", newStudent.mobileNum)
        studentModal.elements.valuesList().eq(4).should("have.text", newStudent.dateOfBirth.formattedDate)
        studentModal.elements.valuesList().eq(5).should("contain", newStudent.subjects[0]).and("contain", newStudent.subjects[1]).and("contain", newStudent.subjects[2])
        studentModal.elements.valuesList().eq(6).should("have.text", newStudent.hobby)
        studentModal.elements.valuesList().eq(7).invoke("text").then((text) => {
            expect(newStudent.picture).to.contain(text)
        })
        studentModal.elements.valuesList().eq(8).should("have.text", newStudent.address)
        studentModal.elements.valuesList().eq(9).should("have.text", `${newStudent.state} ${newStudent.city}`)

        // close the modal
        studentModal.elements.closeModalBtn().click()

        // expect modal to NOT be in the viewport
        studentModal.elements.modalTitle().should("not.exist")
    })
})
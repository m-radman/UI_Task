class PracticeFormPage {
    elements = {
        firstNameField: () => cy.get("#firstName"),
        lastNameField: () => cy.get("#lastName"),
        emailField: () => cy.get("#userEmail"),
        genderRadioOption: (option) => cy.get(`#gender-radio-${option}`),
        mobileField: () => cy.get("#userNumber"),
        dateOfBirthField: () => cy.get("#dateOfBirthInput"),
        subjectsField: () => cy.get("#subjectsContainer"),
        hobbiesCheckOption: (option) => cy.get(`#hobbies-checkbox-${option}`),
        uploadPictureInput: () => cy.get("#uploadPicture"),
        currentAddressField: () => cy.get("#currentAddress"),
        stateDropdown: () => cy.get("#state"),
        cityDropdown: () => cy.get("#city"),
        submitBtn: () => cy.get("#submit")
    }

    selectGenderOption(gender) {
        return this.genderRadioOption(this.mapGender(gender)).click()
    }

    checkHobbyOption(hobby) {
        return this.hobbiesCheckOption(this.mapHobbies(hobby)).check()
    }

    mapGender(gender) {
        if (gender === "male") {
            return 1
        } else if (gender === "female") {
            return 2
        } else if (gender === "other") {
            return 3
        } else {
            throw new Error("Unexpected gender!")
        } 
    }

    mapHobbies(hobby) {
        if (hobby === "sports") {
            return 1
        } else if (hobby === "reading") {
            return 2
        } else if (hobby === "music") {
            return 3
        } else {
            throw new Error("Unexpected hobby option!")
        } 
    }
}
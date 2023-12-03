class PracticeFormPage {
    elements = {
        firstNameField: () => cy.get("#firstName"),
        lastNameField: () => cy.get("#lastName"),
        emailField: () => cy.get("#userEmail"),
        genderRadioOption: (option) => cy.get(`#gender-radio-${option}`),
        mobileNumberField: () => cy.get("#userNumber"),
        dateOfBirthField: () => cy.get("#dateOfBirthInput"),
        dayPicker: (dayInputString) => cy.get(`[aria-label="${dayInputString}"]`),
        monthPicker: () => cy.get(".react-datepicker__month-select"),
        yearPicker:() => cy.get(".react-datepicker__year-select"),
        subjectsField: () => cy.get("#subjectsContainer"),
        hobbyCheckOption: (option) => cy.get(`#hobbies-checkbox-${option}`),
        uploadPictureInput: () => cy.get("#uploadPicture"),
        currentAddressField: () => cy.get("#currentAddress"),
        stateDropdown: () => cy.contains("Select State"),
        cityDropdown: () => cy.contains("Select City"),
        submitBtn: () => cy.get("#submit")
    }

    selectDateOfBirth(dayInputString, month, year) {
        this.elements.dateOfBirthField().click()

        // select year and month 
        this.elements.yearPicker().select(year)
        this.elements.monthPicker().select(month)

        // select date of the month
        this.elements.dayPicker(dayInputString).click()
    }

    selectGenderOption(gender) {
        return this.elements.genderRadioOption(this.mapGender(gender)).click({ force: true })
    }

    mapGender(gender) {
        if (gender === "Male") {
            return 1
        } else if (gender === "Female") {
            return 2
        } else if (gender === "Other") {
            return 3
        } else {
            throw new Error("Unexpected gender!")
        } 
    }

    checkHobbyOption(hobby) {
        return this.elements.hobbyCheckOption(this.mapHobbies(hobby)).check({ force: true })
    }

    mapHobbies(hobby) {
        if (hobby === "Sports") {
            return 1
        } else if (hobby === "Reading") {
            return 2
        } else if (hobby === "Music") {
            return 3
        } else {
            throw new Error("Unexpected hobby option!")
        } 
    }

    enterSubjects(subjects) {
        subjects.forEach((subject) => {
            this.elements.subjectsField().type(subject + "{enter}")
        })
    }

    selectState(state) {
        if(state == "NCR") {
            this.elements.stateDropdown().click({ force: true }).type("{downarrow}{enter}")
        } else if(state == "Uttar Pradesh") {
            this.elements.stateDropdown().click({ force: true }).type("{downarrow}{downarrow}{enter}")
        } else if (state == "Haryana") {
            this.elements.stateDropdown().click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
        } else if (state == "Rajasthan") {
            this.elements.stateDropdown().click({ force: true }).type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")
        } else {
            throw new Error("Unexpected state input!")
        }
    }

    selectCity(city) {
        if(city == "Delhi" || city == "Agra" || city == "Karnal" || city == "Jaipur") {
            this.elements.cityDropdown().click({ force: true }).type("{downarrow}{enter}")
        } else if(city == "Gurgaon" || city == "Lucknow" || city == "Panipat" || city == "Jaiselmer") {
            this.elements.cityDropdown().click({ force: true }).type("{downarrow}{downarrow}{enter}")
        } else if(city == "Noida" || city == "Merrut") {
            this.elements.cityDropdown().click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
        } else {
            throw new Error("Unexpected city input!")
        }
    }
}

export default new PracticeFormPage()
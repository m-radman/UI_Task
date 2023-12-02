import { faker } from "@faker-js/faker"

import { SUBJECTS } from "../../support/constants"

class StudentFaker {
    generateValidStudent() {
        const state = this.getState()
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.exampleEmail(),
            gender: this.getGender(),
            mobileNum: Math.floor(Math.random() * 10000000000),
            dateOfBirth: {
                day: Math.floor(Math.random() * 21 + 10).toString(),
                month: this.getMonth(),
                year: Math.floor(Math.random() * 31 + 1975).toString()
            },
            subjects: this.getSubjects(5),
            hobby: this.getHobby(),
            picture: "./cypress/e2e/images/profile_pic.jpg",
            address: faker.location.streetAddress(),
            state: state,
            city: this.getCity(state)
        }
    }

    getGender() {
        const option = Math.floor(Math.random() * 3 + 1)

        if(option == 1) {
            return "Male"
        } else if(option == 2) {
            return "Female"
        } else {
            return "Other"
        }
    }

    getHobby() {
        const option = Math.floor(Math.random() * 3 + 1)

        if(option == 1) {
            return "Sports"
        } else if(option == 2) {
            return "Reading"
        } else {
            return "Music"
        }
    }

    getMonth() {
        const month = Math.floor(Math.random() * 12)

        if(month == 0) {
            return "January"
        } else if(month == 1) {
            return "February"
        } else if(month == 2) {
            return "March"
        } else if(month == 3) {
            return "April"
        } else if(month == 4) {
            return "May"
        } else if(month == 5) {
            return "June"
        } else if(month == 6) {
            return "July"
        } else if(month == 7) {
            return "August"
        } else if(month == 8) {
            return "September"
        } else if(month == 9) {
            return "October"
        } else if(month == 10) {
            return "November"
        } else if(month == 11) {
            return "December"
        }
    }

    getSubjects(num) {
        let index
        let subjects = []

        for(let i = 0; i < num; i++) {
            index = Math.floor(Math.random() * SUBJECTS.length)

            if(subjects.includes(SUBJECTS[index]) == false) {
                subjects.push(SUBJECTS[index])
            }
        }
        return subjects
    }

    getState() {
        const option = Math.floor(Math.random() * 4 + 1)

        if(option == 1) {
            return "NCR"
        } else if(option == 2) {
            return "Uttar Pradesh"
        } else if(option == 3) {
            return "Haryana"
        } else if(option == 4){
            return "Rajasthan"
        }
    }

    getCity(state) {
        let option

        if(state == "NCR") {
            option = Math.floor(Math.random() * 3 + 1)

            if(option == 1) {
                return "Delhi"
            } else if(option == 2) {
                return "Gurgaon"
            } else {
                return "Noida"
            }

        } else if(state == "Uttar Pradesh") {
            option = Math.floor(Math.random() * 3 + 1)

            if(option == 1) {
                return "Agra"
            } else if(option == 2) {
                return "Lucknow"
            } else {
                return "Merrut"
            }

        } else if(state == "Haryana") {
            option = Math.floor(Math.random() * 2 + 1)

            if(option == 1) {
                return "Karnal"
            } else {
                return "Panipat"
            }
        } else if(state == "Rajasthan"){
            option = Math.floor(Math.random() * 2 + 1)

            if(option == 1) {
                return "Jaipur"
            } else {
                return "Jaiselmer"
            }
        }
    }
}

export default new StudentFaker()
import { faker } from "@faker-js/faker"

import { SUBJECTS, UPLOAD_PROFILE_PIC_PATH } from "../../support/constants"

class StudentFaker {
    generateValidStudent() {
        const state = this.getRandomState()
        const city = this.getRandomCity(state)
        const gender = this.getRandomGender()
        const hobby = this.getRandomHobby()
        const dateOfBirth = this.getRandomDate() 

        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.exampleEmail(),
            gender: gender,
            mobileNum: Math.floor(Math.random() * 10000000000),
            dateOfBirth: dateOfBirth,
            subjects: this.getRandomSubjects(5),
            hobby: hobby,
            picture: UPLOAD_PROFILE_PIC_PATH,
            address: faker.location.streetAddress(),
            state: state,
            city: city
        }
    }

    getRandomGender() {
        // Note: we take random value from 1 to 3
        const option = Math.floor(Math.random() * 3 + 1)

        if(option == 1) {
            return "Male"
        } else if(option == 2) {
            return "Female"
        } else {
            return "Other"
        }
    }

    getRandomHobby() {
        // Note: we take random value from 1 to 3
        const option = Math.floor(Math.random() * 3 + 1)

        if(option == 1) {
            return "Sports"
        } else if(option == 2) {
            return "Reading"
        } else {
            return "Music"
        }
    }

    getRandomDate() {
        const startDate = new Date(1980, 0, 1) // 1st Jan 1980, some random start range date
        const endDate = new Date(2005, 11, 31) // 31st Dec 2005, some end range date

        // generate random date between startDate and endDate
        const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

        const day = randomDate.getDate()
        const month = this.mapMonthIndexToName(randomDate.getMonth())
        const year = randomDate.getFullYear().toString()

        const dayString = day < 10 ? `0${day}` : `${day}`
        const dayOfWeek = this.mapDayIndexToName(randomDate.getDay())
        const dayOfMonth = this.addSufixToDate(day)

        return {
            month: month,
            year: year,
            dayInputString: `Choose ${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`,
            formattedDate: `${dayString} ${month},${year}`
        }
    }

    mapMonthIndexToName(month) {
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

    mapDayIndexToName(day) {
        if(day == 0) {
            return "Sunday"
        } else if(day == 1) {
            return "Monday"
        } else if(day == 2) {
            return "Tuesday"
        } else if(day == 3) {
            return "Wednesday"
        } else if(day == 4) {
            return "Thursday"
        } else if(day == 5) {
            return "Friday"
        } else if(day == 6) {
            return "Saturday"
        }
    }

    addSufixToDate(dayOfMonth) {
        if(dayOfMonth == 1 || dayOfMonth == 21 || dayOfMonth == 31) {
            return `${dayOfMonth}st`
        } else if (dayOfMonth == 2 || dayOfMonth == 22) {
            return `${dayOfMonth}nd`
        } else if (dayOfMonth == 3 || dayOfMonth == 23) {
            return `${dayOfMonth}rd`
        } else {
            return `${dayOfMonth}th`
        }
    }

    getRandomSubjects(num) {
        // Shuffle the subjects
        const shuffledSubjects = SUBJECTS.sort(() => 0.5 - Math.random());

        // Return first num from shuffled array 
        return shuffledSubjects.slice(0, num);
    }

    getRandomState() {
        // Note: we take random value from 1 to 4
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

    getRandomCity(state) {
        if(state == "NCR") {
            const option = Math.floor(Math.random() * 3 + 1)

            if(option == 1) {
                return "Delhi"
            } else if(option == 2) {
                return "Gurgaon"
            } else {
                return "Noida"
            }

        } else if(state == "Uttar Pradesh") {
            const option = Math.floor(Math.random() * 3 + 1)

            if(option == 1) {
                return "Agra"
            } else if(option == 2) {
                return "Lucknow"
            } else {
                return "Merrut"
            }

        } else if(state == "Haryana") {
            const option = Math.floor(Math.random() * 2 + 1)

            if(option == 1) {
                return "Karnal"
            } else {
                return "Panipat"
            }
        } else if(state == "Rajasthan"){
            const option = Math.floor(Math.random() * 2 + 1)

            if(option == 1) {
                return "Jaipur"
            } else {
                return "Jaiselmer"
            }
        }
    }
}

export default new StudentFaker()
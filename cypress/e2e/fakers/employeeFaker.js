import { faker } from "@faker-js/faker"

class EmployeeFaker {
    generateValidEmployee() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.exampleEmail(),
            age: Math.floor(Math.random() * 100),
            salary: Math.floor(Math.random() * 100000),
            department: faker.person.jobArea()
        }
    }

    generateEmployeeWithoutAge() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.exampleEmail(),
            age: null,
            salary: Math.floor(Math.random() * 100000),
            department: faker.person.jobArea()
        }
    }

    generateEmployeeWithInvalidSalary() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.exampleEmail(),
            age: Math.floor(Math.random() * 100),
            salary: "no salary",
            department: faker.person.jobArea()
        }
    }

    generateEmployeeSalaryAndDepartment() {
        return {
            salary: Math.floor(Math.random() * 100000),
            department: faker.person.jobArea()
        }
    }
}

export default new EmployeeFaker()
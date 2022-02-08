const {faker} = require('@faker-js/faker');

module.exports  = {
    valid: {
        id: 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
    },
    updated: {
        id: 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
    },
    invalid: {
        firstName: {
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            password: faker.internet.password(),
            email: faker.internet.email()
        },
        lastName: {
            firstName: faker.name.firstName(),
            username: faker.internet.userName(),
            password: faker.internet.password(),
            email: faker.internet.email()
        },
        username: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            password: faker.internet.password(),
            email: faker.internet.email()
        },
        
        password: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        },
        
        email: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            password: faker.internet.password(),
        }
    }    
}

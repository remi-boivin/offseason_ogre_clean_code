Base = require('./Base');

module.exports = class User extends Base {
    constructor(userInstance) {
        super(Date.now())
            // this.id = null;

        if (!userInstance.firstName || !userInstance.lastName || !userInstance.username || !userInstance.password || !userInstance.email) {
            throw new Error('User must have first name, last name, username, password  and email.');
        } else {
            this.firstName = userInstance.firstName;
            this.lastName = userInstance.lastName;
            this.username = userInstance.username;
            this.password = userInstance.password;
            this.email = userInstance.email;
        }
    }
};
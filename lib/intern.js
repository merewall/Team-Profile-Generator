// Require the Employee class
const Employee = require('./employee');

// Intern is an extension of Employee class adding the school property, getSchool method, and overrides the role to "Intern" with getRole method
class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name,id,email);
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

// Export the Intern class for use in index.js
module.exports = Intern;
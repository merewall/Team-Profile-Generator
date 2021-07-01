// Require the Employee class
const Employee = require('./employee');

// Manager class extends the Employee class adding a officeNumber property, getOffice method, and overrides the role to "Manager" with getRole method
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }

    getOffice() {
        return this.officeNumber;
    }
}

// Export the Manager class for use in index.js
module.exports = Manager;
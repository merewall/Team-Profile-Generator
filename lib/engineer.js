
// Require the Employee class
const Employee = require('./employee');

// Engineer class extends the Employee class and adds the github user name, getGitHub method, and overrides the role to "Engineer" with getRole method
class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email, role);
        this.github = github;
    }

    getGitHub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

// Export the Engineer class for use in index.js
module.exports = Engineer;
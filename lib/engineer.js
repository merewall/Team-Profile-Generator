const index = require('../index');

const Employee = require('./employee');
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

module.exports = Engineer;
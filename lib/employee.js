// Employee class has properties of name, id, email, and the default role of "Employee"
// with methods to getName, getId, getEmail, and getRole
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

// Export the Employee class for use in the extension classes
module.exports = Employee;
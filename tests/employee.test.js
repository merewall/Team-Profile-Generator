const Employee = require("../lib/employee");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should return an object containing properties for 'name', 'id', 'email', and 'role' properties when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });

        it("should set 'name', 'id', and 'email' when created", () => {
   
            const obj = new Employee('Meredith','3','me@me.com');

            expect(obj.name).toEqual('Meredith');
            expect(obj.id).toEqual('3');
            expect(obj.email).toEqual('me@me.com');
        });
        
        it("should default 'role' to 'Employee'", () => {
            const obj = new Employee();

            expect(obj.role).toEqual('Employee');
        });

    });

    describe("getName method of Employee class", () => {

        it("should return the value of the 'name' property of that instance of Employee", () => {
            const obj = new Employee('Meredith', '3', 'me@me.com');

            expect(obj.getName()).toEqual('Meredith');
        });

    });

    describe("getId method of Employee class", () => {

        it("should return the value of the 'id' property of that instance of Employee", () => {
            const obj = new Employee('Meredith', '3', 'me@me.com');

            expect(obj.getId()).toEqual('3');
        });

    });

    describe("getEmail method of Employee class", () => {

        it("should return the value of the 'email' property of that instance of Employee", () => {
            const obj = new Employee('Meredith', '3', 'me@me.com');

            expect(obj.getEmail()).toEqual('me@me.com');
        });

    });

    describe("getRole method of Employee class", () => {

        it("should return the default value of the 'role' property of that instance of Employee", () => {
            const obj = new Employee('Meredith', '3', 'me@me.com');

            expect(obj.getRole()).toEqual('Employee');
        });

    });
})
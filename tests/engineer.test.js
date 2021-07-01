// Require the Employee class and Engineer subclass
const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee")

describe("Engineer", () => {
    // Tests for initializing an instance of the Engineer class
    describe("Initialization", () => {

        it("should return an object that is an instance of Employee", () => {
            const obj = new Engineer();

            expect(obj).toBeInstanceOf(Employee);
        });

        it("should return an object containing properties for 'name', 'id', 'email', 'github', and 'role' when called with the 'new' keyword", () => {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });

        it("should set 'name', 'id', 'email', 'github' when created", () => {
   
            const obj = new Engineer('Meredith','3','me@me.com', 'merewall');

            expect(obj.name).toEqual('Meredith');
            expect(obj.id).toEqual('3');
            expect(obj.email).toEqual('me@me.com');
            expect(obj.github).toEqual('merewall');
        });
        
        it("should have the default 'role' of 'Employee'", () => {
            const obj = new Engineer();

            expect(obj.role).toEqual('Employee');
        });

    });

    // Tests for using the methods of Engineer class

    describe("getGitHub method of Engineer class", () => {

        it("should return the value of the 'github' property of that instance of Engineer", () => {
            const obj = new Engineer('Meredith', '3', 'me@me.com', 'merewall');

            expect(obj.getGitHub()).toEqual('merewall');
        });

    });

    describe("getRole method of Engineer class", () => {

        it("should return 'Engineer' for the 'role' property of that instance of Engineer", () => {
            const obj = new Engineer('Meredith', '3', 'me@me.com', 'merewall');

            expect(obj.getRole()).toEqual('Engineer');
        });

    });
})
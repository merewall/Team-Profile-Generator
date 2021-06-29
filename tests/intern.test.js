const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

describe("Intern", () => {
    describe("Initialization", () => {

        it("should return an object that is an instance of Employee", () => {
            const obj = new Intern();

            expect(obj).toBeInstanceOf(Employee);
        });

        it("should return an object containing properties for 'name', 'id', 'email', 'school', 'role' when called with the 'new' keyword", () => {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });

        it("should set 'name', 'id', 'email', and 'school' when created", () => {
   
            const obj = new Intern('Meredith','3','me@me.com', 'Princeton University');

            expect(obj.name).toEqual('Meredith');
            expect(obj.id).toEqual('3');
            expect(obj.email).toEqual('me@me.com');
            expect(obj.school).toEqual('Princeton University');
        });
        
        it("should have the default 'role' of 'Employee'", () => {
            const obj = new Intern();

            expect(obj.role).toEqual('Employee');
        });

    });

    describe("getSchool", () => {

        it("should return the value of the 'school' property of that instance of Intern", () => {
            const obj = new Intern('Meredith', '3', 'me@me.com', 'Princeton University');

            expect(obj.getSchool()).toEqual('Princeton University');
        });

    });

    describe("getRole", () => {

        it("should return the override value of 'Intern' for the 'role' property of that instance of Intern", () => {
            const obj = new Intern('Meredith', '3', 'me@me.com', 'Princeton University');

            expect(obj.getRole()).toEqual('Intern');
        });

    });
})
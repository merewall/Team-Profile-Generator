const Manager = require("../lib/manager")
const Employee = require("../lib/employee");

describe("Manager", () => {
    describe("Initialization", () => {

        it("should return an object that is an instance of Employee", () => {
            const obj = new Manager();

            expect(obj).toBeInstanceOf(Employee);
        });

        it("should return an object containing properties for 'name', 'id', 'email', 'officeNumber', 'role' when called with the 'new' keyword", () => {
            const obj = new Manager();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });

        it("should set 'name', 'id', 'email', and 'officeNumber' when created", () => {
   
            const obj = new Manager('Meredith','3','me@me.com', '101');

            expect(obj.name).toEqual('Meredith');
            expect(obj.id).toEqual('3');
            expect(obj.email).toEqual('me@me.com');
            expect(obj.officeNumber).toEqual('101');
        });
        
        it("should have the default 'role' of 'Employee'", () => {
            const obj = new Manager();

            expect(obj.role).toEqual('Employee');
        });

    });

    describe("getOffice method of Manager class", () => {

        it("should return the value of the 'officeNumber' property of that instance of Manager", () => {
            const obj = new Manager('Meredith', '3', 'me@me.com', '101');

            expect(obj.getOffice()).toEqual('101');
        });

    });

    describe("getRole method of Manager class", () => {

        it("should return the override value of 'Manager' for the 'role' property of that instance of Manager", () => {
            const obj = new Manager('Meredith', '3', 'me@me.com', '101');

            expect(obj.getRole()).toEqual('Manager');
        });

    });
})
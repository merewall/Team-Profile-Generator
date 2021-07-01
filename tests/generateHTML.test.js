// Require the Manager, Intern, and Engineer subclasses and generateHTML functions
const generateHTML = require("../lib/generateHTML");
// const generateMgrHTML = require("../lib/generateHTML");
// const generateEngCards = require("../lib/generateHTML");
// const generateIntCards = require("../lib/generateHTML");
// const generateEndHTML = require("../lib/generateHTML");
// const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");

describe("generateHTML", () => {
    // Test for the generateMgrHTML function
    describe("generateMgrHTML ", () => {

        it("should push a string of HTML as a new item to the array of htmlString with 1 existing string, given an intance of the Manager class", () => {
            const obj = new Manager("Meredith", "3", "me@me.com", "101");
            
            const newHTMLString = generateHTML.generateMgrHTML(obj);

            expect(newHTMLString.length).toBe(2);
        });
        
    });
    // Test for the generateIntHTML function
    describe("generateIntHTML ", () => {

        it("should push a string of HTML as a new item to the array of htmlString with 2 existing strings, given an intance of the Intern class", () => {
            const obj = new Intern("Meredith", "3", "me@me.com", "Princeton University");
            
            const newHTMLString = generateHTML.generateIntHTML(obj);

            expect(newHTMLString.length).toBe(3);
        });

    });
    // Test for the generateEngHTML function
    describe("generateEngHTML ", () => {

        it("should push a string of HTML as a new item to the array of htmlString with 3 existing strings, given an intance of the Engineer class", () => {
            const obj = new Engineer("Meredith", "3", "me@me.com", "merewall");
            
            const newHTMLString = generateHTML.generateEngHTML(obj);

            expect(newHTMLString.length).toBe(4);
        });

    });
    // Test for the generateEndHTML function
    describe("generateEndHTML ", () => {

        it("should push a string of HTML as a new item to the array of htmlString with 4 existing strings", () => {

            const newHTMLString = generateHTML.generateEndHTML();

            expect(newHTMLString.length).toBe(5);
        });

    });
    // Test for the generateHTML function
    describe("generateHTML method", () => {

        it("should join the htmlString array to become a single string", () => {

            const newHTMLString = generateHTML.generateHTML();

            expect(typeof newHTMLString).toEqual("string");
        });

    });

})
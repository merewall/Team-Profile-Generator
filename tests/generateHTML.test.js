const generateHTML = require("../lib/generateHTML");
const generateMgrHTML = require("../lib/generateHTML");
const generateEngCards = require("../lib/generateHTML");
const generateIntCards = require("../lib/generateHTML");
const generateEndHTML = require("../lib/generateHTML");
const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");

describe("generateHTML", () => {
    describe("generateMgrHTML method", () => {

        it("should push a string of HTML as a new item to the array of htmlString with 1 existing string, given an intance of the Manager class", () => {
            const obj = new Manager("Meredith", "3", "me@me.com", "101");
            
            const newHTMLString = generateHTML.generateMgrHTML(obj);

            expect(newHTMLString.length).toBe(2);
        });
        
    });

    describe("generateIntCards method", () => {

        it("should push a string of HTML as a new item to the array of htmlString with 2 existing strings, given an intance of the Intern class", () => {
            const obj = new Intern("Meredith", "3", "me@me.com", "Princeton University");
            
            const newHTMLString = generateHTML.generateIntCards(obj);

            expect(newHTMLString.length).toBe(3);
        });

    });

    describe("generateEngCards method", () => {

        it("should push a string of HTML as a new item to the array of htmlString with 3 existing strings, given an intance of the Engineer class", () => {
            const obj = new Engineer("Meredith", "3", "me@me.com", "merewall");
            
            const newHTMLString = generateHTML.generateEngCards(obj);

            expect(newHTMLString.length).toBe(4);
        });

    });

    describe("generateEndHTML method", () => {

        it("should push a string of HTML as a new item to the array of htmlString with 4 existing strings", () => {

            const newHTMLString = generateHTML.generateEndHTML();

            expect(newHTMLString.length).toBe(5);
        });

    });

    describe("generateHTML method", () => {

        it("should join the htmlString array to become a single string", () => {

            const newHTMLString = generateHTML.generateHTML();

            expect(typeof newHTMLString).toEqual("string");
        });

    });

})
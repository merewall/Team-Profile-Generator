// Require packages and files needed for this application: inquirer, fs
// Also used the inquirer-looper package found through research here: https://www.npmjs.com/package/inquirer-loop
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');

// Require the Engineer, Intern, and Manager classes, as well as functions in generateHTML
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./lib/generateHTML');


// An array of questions that will render in command line for the user's input
const questions = [
    // Prompt for Team Manager
    {
      type: 'input',
      name: 'mgrName',
      message: "Enter the team manager's name:",
      validate: (mgrNameInput) => {
          if (mgrNameInput) {
              return true;
          } else {
              console.log("\x1b[31m","\nYou must provide a name for the team manager!");
              return false;
          }
      }
    },
    // Prompt for team manager ID
    {
      type: 'number',
      name: 'mgrID',
      message: "Enter the team manager's employee ID number:",
      validate: (mgrIDInput) => {
        if (!mgrIDInput) {
            console.log("\x1b[31m","\nYou must provide an employee ID number for the team manager!");
            return false;
        } else if (typeof mgrIDInput !== 'number') {
            console.log("\x1b[31m",'\nThe employee ID must be a number!');
            return false;
        } else {
            return true;
        }
    },
    filter: (mgrIDInput) => {
        if (isNaN(mgrIDInput)) {
           return '' 
        } else {
            return mgrIDInput
        }
    },
    },
    // Prompt for team manager email
    {
      type: 'input',
      name: 'mgrEmail',
      message: "Enter the team manager's email address:",
      validate: (mgrEmailInput) => {
        if (!mgrEmailInput) {
            console.log("\x1b[31m","\nYou must provide an email address for the team manager!");
            return false;
        } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mgrEmailInput)) {
            return true;
        } else {
            console.log("\x1b[31m","\nYou have entered an invalid email address!");
            return false;
        }
        }
    },
    // Prompt for team manager office number
    {
      type: 'number',
      name: 'mgrOffice',
      message: "Enter the team manager's office number:",
      validate: (mgrOfficeInput) => {
        if (!mgrOfficeInput) {
            console.log("\x1b[31m",'\nYou must provide an office number!');
            return false;
        } else if (typeof mgrOfficeInput !== 'number') {
            console.log('\nThe office number must be a number!');
            return false;
        } else {
            return true
        }
    },
        // remove NaN from input line such that user can enter new input
        filter: (officeInput) => {
            if (isNaN(officeInput)) {
            return '' 
            } else {
                return officeInput
            }
    },
        

    },
    // Prompt for adding a team member
    {
        type: 'loop',
        name: 'newEmployee',
        message: 'Add another employee to your team?',
        questions: [
            {
                type: 'list',
                name: 'role',
                message: 'Choose a role to add to your team:',
                choices: ['Engineer', 'Intern'],
              },
              // Prompt for employee name
              {
                type: 'input',
                name: 'name',
                message: "Enter employee's name:",
                when: (answers) => answers.role === 'Engineer' || answers.role === 'Intern',
                validate: (nameInput) => {
                  if (nameInput) {
                      return true;
                  } else {
                      console.log("\x1b[31m","\nYou must provide a name for the employee!");
                      return false;
                  }
              }
              },
              // Prompt for employee ID
              {
                  type: 'number',
                  name: 'id',
                  message: "Enter employee's ID number:",
                  when: (answers) => answers.role === 'Engineer' || answers.role === 'Intern',
                  validate: (idInput) => {
                      if (!idInput) {
                          console.log("\x1b[31m","\nYou must provide an employee ID number!");
                          return false;
                      } else if (typeof idInput !== 'number') {
                          console.log("\x1b[31m",'\nThe employee ID must be a number!');
                          return false;
                      } else {
                          return true
                      }
                    },
                    filter: (idInput) => {
                        if (isNaN(idInput)) {
                        return '' 
                        } else {
                            return idInput
                        }
                    },
                  
                },
                // Prompt for employee email
              {
                  type: 'input',
                  name: 'email',
                  message: "Enter employee's email address:",
                  when: (answers) => answers.role === 'Engineer' || answers.role === 'Intern',
                  validate: (emailInput) => {
                    if (!emailInput) {
                        console.log("\x1b[31m","\nYou must provide an employee email address!");
                        return false;
                    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
                        return true;
                    } else {
                        console.log("\x1b[31m","\nYou have entered an invalid email address!");
                        return false;
                    }
                }
                },
                // Prompt for engineer's GitHub user name
                {
                  type: 'input',
                  name: 'github',
                  message: "Please enter the engineer's GitHub user name.",
                  when: (answers) => answers.role === 'Engineer',
                  validate: (githubInput) => {
                      if (githubInput) {
                          return true;
                      } else {
                          console.log("\x1b[31m","\nYou must enter an employee GitHub user name!");
                          return false;
                      }
                  }
                },
                // Prompt for intern's school
                {
                  type: 'input',
                  name: 'school',
                  message: "Enter the intern's school name:",
                  when: (answers) => answers.role === 'Intern',
                  validate: (schoolInput) => {
                      if (schoolInput) {
                          return true;
                      } else {
                          console.log("\x1b[31m","\nYou must provide the intern's school!");
                          return false;
                      }
                  }
                },
        ],
    },
];

// Function to initialize app
function init() {
    // Give a welcome message
    console.log("\n--------------------------------------------\nWELCOME!\nLet's build your team profile page! \n--------------------------------------------\n")
    
    // After 1 second, provide some instructions
    setTimeout(function(){
        console.log("Please answer the questions followed by the ENTER key. \n");
    }, 1000);
    
    // Use the questions to prompt the user in command line 2.5 sec after welcome message
    setTimeout(function() {
        inquirer.prompt(questions)
        // Use the user's answers to generate the HTML and output it to a new directory
        .then((answers) => {
           
            // variables for the manager's information and the array of other employees
            const manager = answers.mgrName;
            const managerID = answers.mgrID;
            const managerEmail = answers.mgrEmail;
            const managerOffice = answers.mgrOffice;
            const employeeArray = answers.newEmployee

            // generate a new instance of Manager from the user input's for the manager...
            const mgr = new Manager (manager ,managerID, managerEmail, managerOffice)
            
            // and create the HTML string for a manager card using that manager instance
            generateHTML.generateMgrHTML(mgr);

            // check if there are employees other than the manager added
            if(employeeArray) {

                // for each other employee...
                for (i = 0; i < employeeArray.length; i++) {
                    // check if their role is Engineer...
                    if(employeeArray[i].role === "Engineer") {
                        // ...and if so, create a new instance of the Engineer class
                        let eng = new Engineer (employeeArray[i].name, employeeArray[i].id, employeeArray[i].email, employeeArray[i].github);
                        // and create the HTML string for an engineer card using that engineer instance
                        generateHTML.generateEngHTML(eng)
                        
                    } else {
                        // ...otherwise, (because there is only 2 choices: engineer or intern), create a new instance of the Intern class
                        let int = new Intern (employeeArray[i].name, employeeArray[i].id, employeeArray[i].email, employeeArray[i].school);
                       // and create the HTML string for an intern card using that intern instance
                        generateHTML.generateIntHTML(int)
                    }
                };
                
            }; 

            // add the ending HTML to the HTML string
            generateHTML.generateEndHTML()
            
            // create a HTML file in the dist directory, using the generateHTML function to join the array of HTML strings
            fs.writeFile('./dist/index.html', generateHTML.generateHTML(), (err) => {
                err ? console.error(err) : console.log("\x1b[32m",'Successfully created HTML!');
            });            
        })
    }, 2500);
}

// Function call to initialize app
init();

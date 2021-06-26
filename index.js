// Include packages and files needed for this application: inquirer, fs, and the generateMarkdown.js file
const inquirer = require('inquirer');
// https://www.npmjs.com/package/inquirer-loop
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./lib/generateHTML');


// An array of questions that will render in the command line for the user's input
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
                message: 'Choose a role to add to your team or complete your team:',
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
                  message: "Enter the employee's ID number:",
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
                  message: "Enter the employee's email address:",
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

// Function to write HTML file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//         err ? console.error("\x1b[31m", err) : console.log('Successfully created README.md!')
//     );
// }

// Function to initialize app
function init() {
    console.log("\n--------------------------------------------\nWELCOME!\nLet's build your team profile page! \n--------------------------------------------\n")
    
    setTimeout(function(){
        console.log("Please answer the questions followed by the ENTER key. \n");
    }, 1000);
    
    // Use the questions to prompt the user in command line 2.5 sec after welcome message
    
    setTimeout(function() {
        inquirer.prompt(questions)
        // Use the user's answers to generate the HTML and output it to a new directory
        .then((answers) => {
            // const readmeContent = generateMarkdown(answers);
            // writeToFile('./sample-readme/README.md', readmeContent);
            // console.log(answers);
            // console.log(answers.mgrName);
            // console.log(answers.newEmployee[0].name);

            const manager = answers.mgrName;
            const managerID = answers.mgrID;
            const managerEmail = answers.mgrEmail;
            const managerOffice = answers.mgrOffice;

            const mgr = new Manager (manager ,managerID, managerEmail, managerOffice)
            // console.log(mgr)
            generateHTML.generateMgrHTML(mgr);
            // console.log(mgr.name);
            // console.log(answers.newEmployee);

            // check if there are employees other than the manager added
            if(!answers.newEmployee) {
                console.log('nope!')
            } else {
                // console.log(answers.newEmployee.length)
                for (i = 0; i < answers.newEmployee.length; i++) {
                    if(answers.newEmployee[i].role === "Engineer") {
                        let eng = new Engineer (answers.newEmployee[i].name, answers.newEmployee[i].id, answers.newEmployee[i].email, answers.newEmployee[i].github);
                        
                        // instead of console log... have a generate HTML function - but these work
                        // console.log(emp)
                        // console.log(emp.getName())
                        // console.log(emp.getId())
                        // console.log(emp.getEmail())
                        // console.log(emp.getGitHub())
                        // console.log(emp.getRole())

                        // not working
                        generateHTML.generateEngCards(eng)
                        
                    } else {
                        let int = new Intern (answers.newEmployee[i].name, answers.newEmployee[i].id, answers.newEmployee[i].email, answers.newEmployee[i].school);
                        // instead of console log... have a generate HTML function
                        // console.log(emp)
                        // console.log(emp.getName())
                        // console.log(emp.getId())
                        // console.log(emp.getEmail())
                        // console.log(emp.getRole())
                        // console.log(emp.getSchool())
                        generateHTML.generateIntCards(int)
                    }
                }
            }

            generateHTML.generateEndHTML()
            // console.log(answers.newEmployee.length);
            // const mgr = new Manager (answer.mgrName,);
            // console.log(tink.getName());
            // console.log(tink.getId());
            // console.log(tink.getEmail());
            // console.log(tink.getRole());
            fs.writeFile('./dist/index.html', generateHTML.generateHTML(), (err) => {
                err ? console.error(err) : console.log('html created!');
            });            
        })
    }, 2500);
}

// Function call to initialize app
init();

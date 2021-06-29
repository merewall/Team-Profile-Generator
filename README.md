# Team-Profile-Generator
A command-line application that generates an HTML page of your team's information (names, roles, employee IDs, emails, office #, github username, and school) based on user inputs.

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## DESCRIPTION

This project is a command-line application for creating an HTML page of a team profile based on user inputs for the following:
- Team Manager name, employee id, email, and office number
- Whether there are additional employees on the team
- If an employee is an engineer or intern
- An engineer's name, employee id, email, and GitHub username
- An intern's name, employee id, email, and school

The application uses the node inquirer package for prompting questions in command-line. It also uses jest to run the tests for the application. 

## TABLE OF CONTENTS

- [DESCRIPTION](#description)
- [DEVELOPMENT CRITERIA](#development-criteria)
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [LICENSE](#license)
- [CONTRIBUTING](#contributing)
- [TESTS](#tests)
- [TECHNOLOGIES USED](#technologies-used)
- [LINKS](#links)
- [QUESTIONS](#questions)


## DEVELOPMENT CRITERIA

The following acceptance criteria was used to guide the development of this project:
  
- [x] GIVEN a command-line application that accepts user input
- [x] WHEN I am prompted for my team members and their information
- [x] THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- [x] WHEN I click on an email address in the HTML
- [x] THEN my default email program opens and populates the TO field of the email with the address
- [x] WHEN I click on the GitHub username
- [x] THEN that GitHub profile opens in a new tab
- [x] WHEN I start the application
- [x] THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- [x] WHEN I enter the team manager’s name, employee ID, email address, and office number
- [x] THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- [x] WHEN I select the engineer option
- [x] THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- [x] WHEN I select the intern option
- [x] THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- [x] WHEN I decide to finish building my team
- [x] THEN I exit the application, and the HTML is generated
## INSTALLATION

1. Fork the [repository](https://github.com/merewall/Team-Profile-Generator) from [GitHub](https://github.com/) to your profile.
2. Clone the repository down to your local machine in command-line using: `git clone`.
3. Node.js is required to run this application. Click [here](#installing-nodejs) for instructions on installing Node.js.
4. Install the [inquirer package](https://www.npmjs.com/package/inquirer) to your cloned directory in command-line using: `npm install inquirer`.
5. Install the [inquirer loop package](https://www.npmjs.com/package/inquirer-loop) to your cloned directory in command-line using: `npm install --save inquirer-loop`
6. Install [jest](https://jestjs.io/docs/getting-started) to your cloned directory in command-line using: `npm install --save-dev jest`.
7. Open up the package.json file and configure a script named test for running Jest as follows:
    `"scripts": {
        "test": "jest"
    },`
###### Installing Nodejs

1. Check if you already have Node.js in command-line by typing `node`.
2. If you have Node.js on  your machine, a message similar to `Welcome to Node.js` will appear.
3. If you do not have Node.js, an error message will appear and you need to download it.
4. To download Node.js, click [here](https://nodejs.org/en/download/).
5. After download and installation is complete, restart your command-line terminal and redo step 1 to confirm a successful installation.
6. After Node.js is on your local machine, return to the [installation](#installation) instructions for this project's application above.


## USAGE

1. Open command-line terminal on your local machine.
2. Navigate to the cloned directory of the application on your local machine using `cd`, if not already there.
3. If you haven't already, be sure you followed all [installation](#installation) instructions to install inquirer, inquirer loop, node, and jest dependencies.
4. Initialize the application in command-line using: `node index.js`.
5. Answer each question when prompted, and hit the RETURN key.
5. Upon completion, you will receive a message in the console `Successfully created HTML!` unless an error was encountered, in which case, the error will appear in the console.
6. The generated team profile HTML file containing the user inputs will be located in the /dist directory as index.html.
7. Create a copy of the HTML file and assets folder to place it in your desired directory before running the application again.

_Example of initializing the application in command-line and a prompted question:_
![Initializing the application]()

_Example of all prompted questions with user's inputs and success message._
![Success message]()

_Examples of validation check and message when user input is empty or invalid._
![Validation check]()

_A sample HTML file generated using the application._  
![Sample HTML]()

_Example of the HTML file generated using the application deployed on a desktop or larger screen._  
![Sample HTML]()

_Example of the HTML file generated using the application deployed on a tablet or medium screen._  
![Sample HTML]()

_Examples of the HTML file generated using the application deployed on a mobile device or small screen._  
![Sample HTML]()

## LICENSE

This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## CONTRIBUTING

If you'd like to contribute to the project, please create a pull request on a new branch of the [repository](https://github.com/merewall/Team-Profile-Generator) for review.

## TESTS

1. Open the terminal on your local machine.
2. Navigate to the cloned directory of the application on your local machine using `cd`, if not already there.
3. If you haven't already, be sure you followed all [installation](#installation) instructions.
4. To run the tests for the application, initialize them in command-line using: `npm test`.

_Example of initializing the tests in command-line._  
![Tests initialization command-line]()

_Example showing the tests having run and passed._  
![Test success]()

## TECHNOLOGIES USED

- [X] HTML5
- [X] JavaScript
- [X] [Node.js](https://nodejs.org/en/)
- [X] [Jest](https://jestjs.io/)
- [X] [Inquirer](https://www.npmjs.com/package/inquirer)
- [X] [Inquirer Loop](https://www.npmjs.com/package/inquirer-loop)
- [X] [File System](https://nodejs.org/api/fs.html)
## LINKS

* A [Sample HTML](https://github.com/merewall/Team-Profile-Generator/blob/main/dist/index.html) file created using this application.
* The [repository](https://github.com/merewall/Team-Profile-Generator) for this application.
* A [demo video]() on how to use the application.

## QUESTIONS

For any questions, please check out my GitHub profile or send me an email:
* GitHub: [merewall](https://github.com/merewall)
* Email: mlwall@alumni.princeton.edu

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const fs = require('fs')
const inquirer = require('inquirer');
const generateTeam = require('./src/page-template');
//const { default: Choices } = require('inquirer/lib/objects/choices');
const teamArray = [];

// TODO: CODE GOES HERE
//questions for manager info
const managerQuestions = [

    {
        type: "input",
        name: "name",
        message: "What is your team manager's name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your team manager's email?"
    },
    {

        type: "input",
        name: "id",
        message: "What is your team manager's ID?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your team manager's office number?"
    }
]

//questions for various teammembers 
const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?"
        // validate: (name) => {
        //     if (!name) {
        //         console.log("must enter a name");
        //         return false;
        //     } else {
        //         return true;
        //     }
        // },
        // when: ({ membertype }) => {
        //     if (membertype === "engineer") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

    },
    {

        type: "input",
        name: "engineerEmail",
        message: "What is your team engineer's email?"
        // validate: (email) => {
        //     if (!email) {
        //         console.log("must enter a email");
        //         return false;
        //     } else {
        //         return true;
        //     }
        // },
        // when: ({ membertype }) => {
        //     if (membertype === "engineer") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {
        type: "input",
        name: "engineerID",
        message: "What is your team engineer's ID?"
        // validate: (id) => {
        //     if (!id) {
        //         console.log("must enter a id");
        //         return false;
        //     } else {
        //         return true;
        //     }
        // },
        // when: ({ membertype }) => {
        //     if (membertype === "engineer") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {

        type: "input",
        name: "engineerGitHub",
        message: "What is your engineer's github?"
        //     validate: (github) => {
        //         if (!github) {
        //             console.log("must enter a github");
        //             return false;
        //         } else {
        //             return true;
        //         }
        //     },
        //     when: ({ membertype }) => {
        //         if (membertype === "engineer") {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
    }
];

const internQuestions = [
    {

        type: "input",
        name: "internName",
        message: "What is your intern's name?"
        // validate: (name) => {
        //     if (!name) {
        //         console.log("must enter a name");
        //         return false;
        //     } else {
        //         return true;
        //     }
        // },
        // when: ({ membertype }) => {
        //     if (membertype === "intern") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

    },
    {

        type: "input",
        name: "internEmail",
        message: "What is your team intern's email?"
        // validate: (email) => {
        //     if (!email) {
        //         console.log("must enter a email");
        //         return false;
        //     } else {
        //         return true;
        //     }
        // },
        // when: ({ membertype }) => {
        //     if (membertype === "intern") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {
        type: "input",
        name: "internID",
        message: "What is your intern's ID?"
        // validate: (id) => {
        //     if (!id) {
        //         console.log("must enter a ID");
        //         return false;
        //     } else {
        //         return true;
        //     }
        // },
        // when: ({ membertype }) => {
        //     if (membertype === "intern") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {

        type: "input",
        name: "internSchool",
        message: "What school did your intern's attend?"
        //     validate: (school) => {
        //         if (!school) {
        //             console.log("must enter a school");
        //             return false;
        //         } else {
        //             return true;
        //         }
        //     },
        //     when: ({ membertype }) => {
        //         if (membertype === "intern") {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
    }
];

const baseQuestions = [
    {
        type: "list",
        name: "membertype",
        message: "What type of team member would you like to add?",
        choices: ["manager", "engineer", "intern", "finish building team"]
    }
];

function basePrompts() {
    inquirer.prompt(baseQuestions).then(function ({ membertype }) {
        switch (membertype) {
            case "manager":
                managerPrompts();
                break;
            case "engineer":
                engineerPrompts();
                break;
            case "intern":
                internPrompts();
                break;
            default:
                const generated = generateTeam(teamArray);
                console.log(teamArray);
                console.log(generated);
                fs.writeFile("template.html", generateTeam(teamArray), err => {
                    err ? console.error(err) : console.info('success');
                })
        }
    });
}

function managerPrompts() {
    inquirer.prompt(managerQuestions).then(function ({ name, email, id, officeNumber }) {
        teamArray.push(new Manager(name, email, id, officeNumber));
        basePrompts();
    });
}
function engineerPrompts() {
    inquirer.prompt(engineerQuestions).then(function ({ engineerName, engineerEmail, engineerID, engineerGitHub }) {
        teamArray.push(new Engineer(engineerName, engineerEmail, engineerID, engineerGitHub));
        basePrompts();
    });
}
function internPrompts() {
    inquirer.prompt(internQuestions).then(function ({ internName, internEmail, internID, internSchool }) {
        teamArray.push(new Intern(internName, internEmail, internID, internSchool));
        basePrompts();
    });
}

function init() {
    basePrompts();
    //     inquirer.prompt( teamMemberQuestions).then(function(response) {
    //         console.log(response)
    // fs.writeFile("template.html", generateTeam(response))
    //     })
};

init();
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
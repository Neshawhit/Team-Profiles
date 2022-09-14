const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const fs = require('fs')
const inquirer = require('inquirer')

// TODO: CODE GOES HERE
//questions for manager info
const managerQestions = [

    {
        type: "input",
        name: "name",
        message: "What is your team manager's name?",
    }, {

        type: "input",
        name: "ID",
        message: "What is your team manager's ID?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is your team manager's email?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is your team manager's office number?"
    },
    {
        
    }
    
]

//questions for various teammembers 
const teamMemberQuestions = [
    {
        type: "input",
        name: "membertype",
        message: "What type of team member would you like to add?"
    
    },
    {
        
        type: "input",
        name: "name",
        message: `What is your team ${response}'s name?`,

    },
    {
        type: "input",
        name: "ID",
        message: `What is your team ${response}'s ID?`,
    },
    {
        
        type: "input",
        name: "Email",
        message: `What is your team ${response}'s email?`
    },
    {
     
        type: "input",
        name: "officenumber",
        message: `What is your team ${response}'s office number?`   
    }
]

function init() {
    inquirer.prompt(questions).then(function(response) {
fs.appendFile("template.html", Employee.js, Engineer.js, Intern.js, Manager.js(response))
    })
};

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
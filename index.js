const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generate = require("./src/generateHTML");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

// Manager Questions
function managerQuestions() {
    return (
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Manager's name is required.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's ID?",
                validate: (id) => {
                    if (isNaN(id)) {
                        console.log("Please enter Manager's ID");
                        return false;
                    } else {
                        return true;
                    }
                },
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email address?",
                validate: (email) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                    } else {
                        console.log("Not a valid email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: (officeNumberInput) => {
                    if (isNaN(officeNumberInput)) {
                        console.log("Please enter a valid office number.");
                        return false;
                    } else {
                        return true;
                    }
                },
            },
        ])
        .then((managerInput) => {
            const { name, id, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            employees.push(manager);
            teamChoice();
        })
    );
}

managerQuestions();

function engineerQuestions() {
    return (
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Must include the engineers name.");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's ID?",
                validate: (idInput) => {
                    if (isNaN(idInput)) {
                        console.log("Please enter engineer's ID to proceed.");
                        return false;
                    } else {
                        return true;
                    }
                },
            },
            {
                
            }
        ])
    )
}
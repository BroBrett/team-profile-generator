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
            }
        ])
    )
}
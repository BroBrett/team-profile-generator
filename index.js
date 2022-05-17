const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArr = [];

async function managerQuestions() {
    try {
        const {name, id, email, officeNumber} = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Team manager's name?",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Manager's name must be included.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Manager's id number?",
                validate: (id) => {
                    if (isNaN(id)) {
                        console.log(" *Id must be a number.");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Manager's email address?",
                validate: (email) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                    } else {
                        console.log(" *Not a valid email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Manager's office number?",
                validate: (officeNumber) => {
                    if (isNaN(officeNumber)) {
                        console.log(' *Please enter a valid office number.');
                        return false;
                    } else {
                        return true;
                    }
                }
    
            }
        ])
        const managerData = new Manager (name, id, email, officeNumber);
        teamArr.push(managerData);
        return crossroads();
    } catch (err) {
        console.error(err)
    }
};

async function crossroads() {
    try {
        const {choice} = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Add a team member?',
                choices: [
                    'Engineer',
                    'Intern',
                    'All-done! Build my team!'
                ]
            }
        ])
        switch(choice) {
            case 'Engineer':
                return engineerQuestions();
            case 'Intern':
                return internQuestions();
            default: 
                return buildTeam();
        }
    } catch (err) {
        console.error(err)
    }
};

async function engineerQuestions () {
    try {
        const {name, id, email, github} = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Engineer's name?",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Engineer's name must be included.");
                        return false;
                    }
                }
    
            },
            {
                type: 'input',
                name: 'id',
                message: "Engineer's id number?",
                validate: (id) => {
                    if (isNaN(id)) {
                        console.log(" *Id must be a number.");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Engineer's email address?",
                validate: (email) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                    } else {
                        console.log(" *Not a valid email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Engineer's github username?",
                validate: (github) => {
                    if (github) {
                        return true;
                    } else {
                        console.log("Engineer's github username must be included.");
                    }
                }
            }
        ])
        const engineerData = new Engineer (name, id, email, github);
        teamArr.push(engineerData);
        return crossroads();
    } catch (err) {
        console.error(err)
    }
};

async function internQuestions() {
    try {
        const {name, id, email, school} = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Intern's name?",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Intern's name must be included.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Intern's id number?",
                validate: (id) => {
                    if (isNaN(id)) {
                        console.log(" *Id must be a number.");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Intern's email address?",
                validate: (email) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                    } else {
                        console.log(" *Not a valid email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the intern attend?',
                validate: (school) => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please enter the school that the intern attends.");
                        return false;
                    }
                }
            }
        ])
        const internData = new Intern (name, id, email, school);
        teamArr.push(internData);
        return crossroads();
    } catch (err) {
        console.error(err)
    }
}

async function buildTeam() {
    try {
        fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), generateHtml(teamArr), 'UTF8')
        console.log("Successfully built your team!");
    } catch (err) {
        console.error(err)
    }
}

managerQuestions();
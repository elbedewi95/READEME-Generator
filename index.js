// TODO: Include packages needed for this application
const path= require("path");
const inquirer = require ("inquirer");
const fs = require("fs");
const markdown = require("./markdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username:"
    },
    {
        type: "input",
        name: "title",
        message: "Please enter the name of your project:"
    },
    {
        type: "input",
        name:"email",
        message:"please enter your e-mail address:"
    },
    {
        type: "input",
        name: "desc",
        message: "Describe your project"
    },
    {
        type: "list",
        name: "license",
        message: "Choose your license: ",
        choices: ["MIT","APACHE","GPL","none"]
    },
    {
        type: "input",
        name: "instCommand",
        message: "What command should the user run to install dependancies?"
    },
    {
        type: "input",
        name: "testCommand",
        message: "What command should the user run to test?"
    },
    {
        type: "input",
        name: "use",
        message: "What does the user need to know to use the generator?"
    },
    {
        type: "input",
        name: "contribution",
        message: "are you allowing contributions to this project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        console.log("README file is being generated right now");
        writeToFile("README.md", markdown({...responses}))
    })
}

// Function call to initialize app
init();

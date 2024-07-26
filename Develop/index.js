// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
    //title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        message: 'Please enter a name for your file',
        name: 'file'
    },
    {
        message: 'Please enter the title of your project',
        name: 'title'
    },
    {
        message: 'Please enter a Description for your project',
        name: 'description'
    },
    {
        message: 'Please enter the installation instructions for your project(press enter to skip)',
        name: 'Installation'
    },
    {
        message: 'Please enter the usage instructions for your project',
        name: 'usage'
    },
    {
        message: 'Please select the license for your project',
        name: 'license',
        type: 'list',
        choices: ['MIT','Apache 2.0 License','Eclipse']
    },
    {
        message: 'Please enter the contribution instructions for your project(press enter to skip)',
        name: 'contributing',
    },
    {
        message: 'Please enter the tests for your project(press enter to skip)',
        name: 'tests',
    },
    {
        message: 'Please enter how you would wish to be contacted(press enter to skip)',
        name: 'contact',
    },
    {
        message: 'Please enter your github username(press enter to skip)',
        name: 'github',
    },
    {
        message: 'Please enter your email(press enter to skip)',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
      );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers)=>{
            const filename = `${answers.file.trim().split(" ").join("").toLowerCase()}.md`;
            writeToFile(filename,answers);
        })




}

// Function call to initialize app
init();

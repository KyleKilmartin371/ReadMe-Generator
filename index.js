// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is your projects name? (Required)',
            validate: projectInput =>{
                if (projectInput){
                    return true;
                }else{
                    console.log('Please enter your projects name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Tell us a little about your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: instalInput =>{
                if (instalInput){
                    return true;
                }else{
                    console.log('Please enter your project steps!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use. Include screenshots as needed (Required)',
            validate: useInput =>{
                if (useInput){
                    return true;
                }else{
                    console.log('Please enter your projects details!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List the collaborators, if any, with links to their Github profiles.',
            }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions()

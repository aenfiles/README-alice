// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

// Collect project title
// console.log('IMPORTANT! ALL FIELDS ARE REQUIRED.')
{
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
    validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
    }
},

// Collect description information
{
    type: 'input',
    name: 'description',
    message: 'What is the description for this project?',
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
    }
},

// Collect installation information
{
    type: 'input',
    name: 'installation',
    message: 'What is the installation process for this project?',
    validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter the installation process for this project!');
          return false;
        }
    }
},

// Collect usage information
{
    type: 'input',
    name: 'usage',
    message: 'What are the steps for this project to be utilized?',
    validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter the process for utilizing this project!');
          return false;
        }
    }
},

// Collect license information
{
    type: 'list',
    name: 'license',
    message: 'Please choose a license option for this project.',
    choices: ['None', 'MIT', 'ISC', 'Apache', 'GNU GPLv3', 'BSD',]
},

// Collect contributing information
{
    type: 'input',
    name: 'contributing',
    message: 'Please let users know how they can contribute to the project:',
    validate: contributeInput => {
        if (contributeInput) {
          return true;
        } else {
          console.log('Please enter a way for users to contribute to this project!');
          return false;
        }
    }
},

// Collect tests information
{
    type: 'input',
    name: 'tests',
    message: 'Please let users know the testing information for this project:',
    validate: testingInput => {
        if (testingInput) {
          return true;
        } else {
          console.log('Please enter the testing information for this project!');
          return false;
        }
    }
},

// Collect GitHub username
{
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username:',
    validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter the username of your GitHub account!');
          return false;
        }
    }
},

// Collect email for questions/contact
{
    type: 'input',
    name: 'email',
    message: 'Please provide a good contact email for users to share questions and/or comments on this project:',
    validate: contactInput => {
        if (contactInput) {
          return true;
        } else {
          console.log('Please enter a good contact email for this project!');
          return false;
        }
    }
}
];

// Function to prompt user with questions
const promptUser = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README.md file has been successfully created! It can be retrieved from the dist folder.")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
  console.log('Welcome to README.md Doctor! Please answer the following prompts.');
    promptUser()
    .then(function(data) {
        return generateMarkdown(data);
    })
    .then(function(data) {
    writeToFile(data)
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
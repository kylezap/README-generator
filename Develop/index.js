// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const renderLicenseBadge = require('./utils/license')


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: colors.green('What is the title of your project?'), 
        },
        {
            type: 'input',
            name: 'description',
            message: colors.green('Please describe your project in a couple few words.'), 
        },
        {
            type: 'input',
            name: 'installation',
            message: colors.green('Please describe any installation instructions.')
        },
        {
            type: 'input',
            name: 'usage',
            message: colors.green('Please describe the usage of the project.') 
        },
        {
            type: 'list',
            name: 'license',
            message: colors.green('Which license will be used?'),
            choices: ['MIT', 'Apache License 2.0', 'GNU v3.0']
        },
        {
            type: 'input',
            name: 'contributing',
            message: colors.green('Who contributed to this project?')
        },
        {
            type: 'input',
            name: 'test',
            message: colors.green('Please advise testing protocol.')
        },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, 
`# ${data.title}
${renderLicenseBadge(data.license)}

# Table of Contents
1. [Description](#Description)
2. [Installation](#installation)
3. [Usage](#tusage)
4. [License](#license)
5. [Contributors](#contributors)
6. [Testing](#testing)
7. [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This is a ${data.license}

## Contributors
${data.contributing}

## Testing
${data.test}

## Questions?
If you have any questions, feel free to send me an email at [kzapcic\@gmail.com](mailto:kzapcic@gmail.com)

`,

(err) => err ? console.log(err) : console.log('Success!'))};

function init() {inquirer.prompt(questions).then((data) => {writeToFile('README.md', data)})}

// Function call to initialize app
init();

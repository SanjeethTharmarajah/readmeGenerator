//Includes inquirer and file system modules
const inquirer = require('inquirer');
const fs = require('fs');
//defines global variable;
let data2 = "";

//prompts to take in various inputs from user using inquerer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your user name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'projectname',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description1',
      message: 'Please, write a short description of your project',
    },
    {
      type: 'list',
      message: 'What is kind of license your project have?',
      name: 'license1',
      choices: ['MIT', 'GNU', 'BY', 'PDDL'],
    },
    {
      type: 'input',
      name: 'command1',
      message: 'What command should be run to install dependcies ?',
    },
    {
      type: 'input',
      name: 'test1',
      message: 'What command should be run to run the test ?',
    },
    {
      type: 'input',
      name: 'repo1',
      message: 'What does user need to know to use your repo ?',
    },
    {
      type: 'input',
      name: 'contact',
      message: 'What does user need to know about contributing to repo?',
    },
  ])
  //after user inputs data handle data
  .then((data) => {
    //defines variables 
    const filename = "readme1.md";
    let license2="";
    //sets data based on input data from inquerer
    data2 = '# Name: ' + data.name + '\r\n';
    data2+= '# Email: ' + data.email + '\r\n';
    data2+= '# Project Name: ' + data.projectname + '\r\n';
    data2+= '## Description: \r\n' + data.description1 + '\r\n';
    data2+= '## License: ' + data.license1 + '\r\n';
   
    //checks license and sets url of it
    if(data.license1=="MIT"){
      license2 = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    if(data.license1=="GNU"){
      license2 = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    if(data.license1=="BY"){
      license2 = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
    }
    if(data.license1=="PDDL"){
      license2 = '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)';
    }

    data2+=  license2 + '\r\n';
    data2+=  '## Command To Run: ' + data.command1 + '\r\n';
    data2+=  '## Test Command To Run: ' + data.test1 + '\r\n';
    data2+=  '## To Know about repo: ' + data.repo1 + '\r\n';
    data2+=  '## How to contribute to repo: ' + data.contact + '\r\n';

    //writes the file based on data given
    fs.writeFile(filename, data2, (err) =>
      err ? console.log(err) : console.log('Successfly created readme.md file!')
    );
  });
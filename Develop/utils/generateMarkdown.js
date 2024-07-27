// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if(license == 'MIT'){
    badge = '\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }else if(license == 'Apache 2.0'){
    badge = '\n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }else if(license == 'Eclipse'){
    badge = '\n[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }else{
    badge ='';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = 'N/A';
  if(license !='None'){
    link = `for more information on the ${license} license or other licenses please got to [https://opensource.guide/](https://opensource.guide/)`
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const str= `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`;
  return str;
}
function renderContact(contact,github,email){
  let str ='N/A';
  let git='';
  let mail ='';
  if(email != ''){
    mail = `Email: ${email}`;
  }
  if(github != ''){
    git = `Github: ${github}`;
  }
  if(contact!=''){
    str = `${contact}\\\n${git}\\\n ${mail}`
  }
  return str;
}


function checkData(data){
  let value = data;
  if(data == ''){
    value = 'N/A'
  }
  return value;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description

  ${checkData(data.description)}

## Table of Contents

  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Contact](#tests)\n

## Installation

  ${checkData(data.installation)}

## Usage

  ${checkData(data.usage)}

## License
  ${renderLicenseSection(data.license)}

## Contributing

  ${checkData(data.contributing)}

## Tests

  ${checkData(data.tests)}

## Contact

  ${renderContact(data.contact,data.github,data.email)}
  

`;
}

module.exports = generateMarkdown;

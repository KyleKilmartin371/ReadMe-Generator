// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return('![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)')
  } else if (license === ("Apache")){
    return('![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)')
  }else if (license === ("Boost")) {
    return('![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)')
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === ("MIT")) {
    return('![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)')
  } else if (license === ("Apache")){
    return('https://opensource.org/licenses/Apache-2.0')
  }else if (license === ("Boost")) {
    return('https://www.boost.org/LICENSE_1_0.txt')
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('part3', license)
  if (license === ("MIT")) {
    console.log('hit')
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)https://opensource.org/licenses/MIT'
  } else if (license === ("Apache")){
    return('![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)https://opensource.org/licenses/Apache-2.0')
  }else if (license === ("Boost")) {
    return('![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)https://www.boost.org/LICENSE_1_0.txt')
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 ## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

---
## Description

  ${data.description}

## Installation
  ${data.installation}

## Usage
  ${data.usage}

  ---

## Credits
  ${data.credits}

  ### Have any questions or concerns? Contact me!
${data.github}

${data.email}

  ---
### License
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;

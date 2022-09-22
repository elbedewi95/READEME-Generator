function markdown(responses){
    return `
    Title: ${responses.title}

    License: ${renderLicense(responses)}

    Description:
    
    ${responses.desc}

    Table Of Contents:
    1. Installation:
    2. Usage
    3. Contributing
    4. Testing
    5. Questions


    1. Installation

    To install run the following commands:
    
    ${responses.instCommand}

    2. Usage:

    ${responses.use}

    3. Contributions:

    ${responses.contribution}

    4. Testing:
    
    ${responses.testCommand}

    5. Questions:
    E-mail: ${responses.email}
    GitHub: github.com/${responses.username}


    `
}

function renderLicense(responses){
    var licenseBadge;
switch (responses.license){
    case "MIT": licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    break;
    case "APACHE": licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    break;
    case "GPL": licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    break;
    case "none": licenseBadge = "No License"
}
return licenseBadge;
}

module.exports = markdown;
function markdown(responses){
    return `
Title: ${responses.title}

License: ${renderLicense(responses)}

Description:
    
${responses.desc}

Table Of Contents:
1.  <a href= "#inst">Installation</a>
2. <a href= "#use">Usage</a>
3. <a href= "#contr">Contributing</a>
4. <a href= "#test">Testing</a>
5. <a href= "#questions">Questions<</a>

<br> <br>

1.  <p id="inst">Installation:</p>

To install run the following commands:
    
${responses.instCommand}

2. <p id="use">Usage:</p>

${responses.use}

3. <p id="contr">Contributions:</p>

${responses.contribution}

4. <p id="test">Testing:</p>
    
${responses.testCommand}

5. <p id="questions">Questions:</p>
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
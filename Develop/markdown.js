function markdown(responses){
    return `
    Title: ${responses.title}

    License: ${responses.license}

    Description:
    
    ${responses.desc}

    Table Of Contents:
    1. Installation:

    To install run the following commands:
    
    ${responses.instCommand}

    2. Usage:

    ${responses.use}

    3. Contributions:

    ${responses.contribution}

    4. Testing:
    
    ${responses.testCommand}

    5. Contact Us:
    E-mail: ${responses.email}
    GitHub: github.com/${responses.username}


    `
}

module.exports = markdown;
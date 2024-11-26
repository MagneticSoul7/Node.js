let fs = require("fs")

let inquirer = require("inquirer")

inquirer.prompt([
    {
        type:"input",
        message:"What is the title of your project?",
        name:"ProjectTitle",
    }
    ,
    {
        type:"input",
        message:"What is the description of your project?",
        name:"Description",
    }
    ,
    {
        type:"input",
        message:"What are the installation instructions?",
        name:"InstallationInstructions",
    }
    , 
    {
        type:"input",
        message:"What is the usage info?",
        name:"UsageInfo",
    }
    ,
    {
        type:"input",
        message:"What are your contribution guidelines?",
        name:"ContributionGuidelines",
    }
    ,
    {
        type:"input",
        message:"What are the test instructions?",
        name:"TestInstructions",
    }
    ,
    {
        type:"input",
        message:"What is your Github username?",
        name:"GithubUsername",
    }
    ,
    {
        type:"input",
        message:"What is your email address?",
        name:"EmailAddress",
    }

])
.then(answers=>{
    let README = `# ${answers.ProjectTitle}

## Table of Contents

1. [ Description ](###Description)
2. [ Installation Instructions ](###InstallationInstructions)
3. [ Usage Info ](###UsageInfo)
4. [ Contribution Guidelines ](###ContributionGuidelines)
5. [ Test Instructions ](###TestInstructions)
6. [ Github Username ](###GithubUsername)
7. [ Email Address ](###EmailAddress)

### Description
${answers.Description}
### Installation Instructions
${answers.InstallationInstructions}
### Usage Info
${answers.UsageInfo}
### Contribution Guidlines
${answers.ContributionGuidelines}
### Test Instructions
${answers.TestInstructions}
### Github Username
${answers.GithubUsername}
### Email Address 
${answers.EmailAddress}

`
    fs.writeFileSync("./output/README.md",README)
})
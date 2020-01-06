// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer")
const fs = require("fs");
const engineerCard = require("./htmlRender/engineerCard");
const internCard = require("./htmlRender/internCard");
const managerCard = require("./htmlRender/managerCard");
const mainRender = require("./htmlRender/mainRender");


const outputPath = path.resolve(__dirname, "output", "team.html");

const teamMember = [];

function mainApp() {
    // create a manager
    inquirer    
        .prompt([
            {type: "input",
            message: "What is the manager's name?",
            name:"managerName"},
            {type: "input",
            message: "What is the manager's ID?",
            name:"managerId"},
            {type: "input",
            message: "What is the manager's email?",
            name:"managerEmail"},
            {type: "input",
            message: "What is the manager's phone number?",
            name:"managerNumber"}
        
        ])
        .then(answers =>{
            const {managerName, managerId, managerEmail, managerNumber} = answers
            const manangerObj = new Manager (managerName, managerId, managerEmail, managerNumber)

            const managerCardHtml = managerCard(manangerObj)

            teamMember.push(managerCardHtml)
            createTeam();
        })

}
// this function create a list to add teammembers
function createTeam(){

    inquirer
        .prompt([
          
            
        ])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team
           
        })
}

// a function that create an engineer
function getEngineer() {

    inquirer    
        .prompt([
            {type: "input",
            message: "What is the engineer's name?",
            name:"engineerName"},
            {type: "input",
            message: "What is the engineer's ID?",
            name:"engineerId"},
            {type: "input",
            message: "What is the engineer's email?",
            name:"engineerEmail"},
            {type: "input",
            message: "What is the engineer's phone number?",
            name:"engineerNumber"}
            
        ])
        .then(answers =>{
           
        })

}
// a function that create an intern
function getIntern() {

    inquirer    
        .prompt([
            {type: "input",
            message: "What is the intern's name?",
            name:"internName"},
            {type: "input",
            message: "What is the intern's ID?",
            name:"internId"},
            {type: "input",
            message: "What is the intern's email?",
            name:"internEmail"},
            {type: "input",
            message: "What is the intern's phone number?",
            name:"internNumber"}
          

        ])
        .then(answers =>{
          
        })

}

function buildTeam() {
fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()



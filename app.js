const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


class Team  {
    constructor() {
        this.Id = 0;
        this.users = [];
        this.manage;
    }
    async getUsers() {
        if(!this.manage){
            const man = new Manager();
            const tmp = await man.getManager();
            this.users.push(man);
        }   
        console.log(users);
        process.exit(0);

        const { role }  = await this.pickUserType(); 
        if(role.choices === "Intern"){
            const int = new Intern();
            const tmp = await int.getIntern();
            this.users.push(int);
        } else {
            const eng = new Engineer();
            const tmp = await eng.getEngineer();
            this.users.push(eng);
        }
        const { moreWorkers }  = await this.continue();
        if ( moreWorkers ){
             this.getUsers();
        } else {
            console.log("Finished adding teams", teams);
            process.exit(0);
        }
    }
    async pickUserType() {
        return inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "Pick the type of worker you wish to add.",
                choices: ["Intern", "Engineer"]
            }
        ])
    }
    async continue() {
        return inquirer.prompt([
            {
                type: "confirm",
                message: "Do you wish to add another worker.",
                name: "moreWorkers",
            }
        ])
    }
    id(){
        this.Id++;
        return this.Id;
    }
}

let teams = new Team();
teams.getUsers();


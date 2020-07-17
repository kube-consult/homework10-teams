// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
class Employee  {
    constructor(name,id,email) {
        this.name = name;
        this.id = 0;
        this.email = email;
        
    }
    async getEmployee() {
        this.name =  { names }  = await this.getDetails("names","What is employee name \n"); 
        this.email =  { email }  = await this.getDetails("email","What is employee email \n"); 
        this.id = teams.id();
    }
    async getDetails(nme,msg) {
        return inquirer.prompt([
            {
                type: "input",
                name: nme,
                message: msg
            }
        ])
    }
}
module.exports = Employee;
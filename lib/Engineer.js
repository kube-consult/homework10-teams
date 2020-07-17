// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name,id,email,guithub) {
      super(name,id,email);
      this.github = github;
      this.role = "Engineer";
    }
    async getEngineer() {
        this.getEmployee();
        const { names }  = await this.getDetails("github","What is your github URL"); 
    }
}
module.exports = Engineer;
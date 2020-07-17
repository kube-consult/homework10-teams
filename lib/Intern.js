// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name,id,email,school) {
      super(name,id,email);
      this.school = school;
      this.role = "Intern";
    }
    async getIntern() {
        this.getEmployee();
        this.school =  { school }  = await this.getDetails("school","What school did you go to."); 
    }
}
module.exports = Intern;
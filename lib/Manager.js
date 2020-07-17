// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name,id,email,officeNum) {
      super(name,id,email);
      this.officeNum = officeNum;
      this.role = "Manager";
    }
    async getManager() {
        this.getEmployee();
        this.officeNum  = { office }  = await this.getDetails("office","What is your office number \n"); 
    }
}
module.exports = Manager;
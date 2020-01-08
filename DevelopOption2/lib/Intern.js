// require Employee class
const EmployeeModule = require("./Employee")


// create a class called intern that extends Employee
class Intern extends EmployeeModule.Employee{
    constructor(name, id, email, officeNumber){
        super(name,id, email);
        this.officeNumber = officeNumber;
    }
    getofficeNumber(){
        return this.officeNumber
    };
    getRole(){
        return "Intern";
    };
    }
// export intern
module.exports.Intern = Intern
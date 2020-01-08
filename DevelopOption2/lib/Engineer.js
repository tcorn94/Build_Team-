// require Employee class
const EmployeeModule = require("./Employee")


// create a class called Engineer that extends Employee
class Engineer extends EmployeeModule.Employee{
    constructor(name, id, email, officeNumber){
        super(name,id, email);
        this.officeNumber = officeNumber;
    }
    getofficeNumber(){
        return this.officeNumber
    };
    getRole(){
        return "Engineer";
    };
    }
// export employee
module.exports.Engineer = Engineer
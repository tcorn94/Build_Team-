// require Employee class
const Employee = require("./Employee")


// create a class called Engineer that extends Employee
class Engineer extends Employee{
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
module.exports
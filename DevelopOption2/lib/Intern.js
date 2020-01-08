// require Employee class
const Employee = require("./Employee")


// create a class called intern that extends Employee
class Intern extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id, email);
        this.officeNumber = officeNumber;
    }
    getofficeNumber(){
        return this.officeNumber
    };
    getRole(){
        return "Manager";
    };
    }
// export intern
module.exports
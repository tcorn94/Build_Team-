// require Employee class
const EmployeeModule = require("./Employee")


// create a class called manager that extends Employee
class Manager extends EmployeeModule.Employee{
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

// export manager
module.exports.Manager = Manager
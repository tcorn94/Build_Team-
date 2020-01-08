// require Employee class
const Employee = require("./Employee")


// create a class called manager that extends Employee
class Manager extends Employee{
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

// export manager
module.exports
"use strict";
class Employees {
    constructor(empName) {
        this.CurrentDate = new Date();
        this.EmpName = empName;
        Employees.EmployeeDetails.push(empName);
        this.DateOfJoin = this.CurrentDate.toISOString();
    }
    displayInfo() {
        console.log(`Employee Name : ${this.EmpName}`);
        console.log(`Joined : ${this.DateOfJoin}`);
    }
}
Employees.EmployeeDetails = [];
const Emp1 = new Employees("Karuppasamy");
const Emp2 = new Employees("Rajkumar");
Emp1.displayInfo();
Emp2.displayInfo();
console.log(Employees.EmployeeDetails);

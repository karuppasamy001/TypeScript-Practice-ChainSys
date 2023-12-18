"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeDetails {
    constructor(person) {
        this.username = person.userName;
        this.email = person.emailId;
        this.password = person.password;
    }
    addEmployee() {
        const newEmp = {
            userName: this.username,
            emailId: this.email,
            password: this.password
        };
        EmployeeDetails.EmpS.push(JSON.stringify(newEmp));
    }
    check(person) {
        for (let i of EmployeeDetails.EmpS) {
            let x = JSON.parse(i);
            if (x.userName == person.userName && x.password == person.password)
                return true;
        }
        return false;
    }
    display(username, emailId, password) {
        let userObj = {
            userName: username,
            emailId: emailId,
            password: password,
        };
        if (this.check(userObj)) {
            return ` User Exists -- Name: ${userObj.userName}`;
        }
        else {
            return ` User Not Exists `;
        }
    }
}
EmployeeDetails.EmpS = [];
const person1 = {
    userName: 'Karuppasamy',
    emailId: 'karu@gmail.com',
    password: 'admin'
};
const person2 = {
    userName: 'Rajkumar',
    emailId: 'raj@gmail.com',
    password: 'admin'
};
const emp1 = new EmployeeDetails(person1);
const emp2 = new EmployeeDetails(person2);
emp1.addEmployee();
emp2.addEmployee();
console.log(emp1.display('Karuppasamy', 'karu@gmai.com', 'admin'));
console.log(emp1.display('Rajkumar', 'raj@gmai.com', 'admin'));
console.log(EmployeeDetails.EmpS);

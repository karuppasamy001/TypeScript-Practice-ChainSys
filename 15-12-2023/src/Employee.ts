import { UserProfile, Display } from "./Interfaces";

class EmployeeDetails implements Display {

    static EmpS : string[] = []

    private username: string
    private email: string
    private password: string

    constructor(person: UserProfile){

        this.username = person.userName
        this.email = person.emailId
        this.password = person.password

        
    }

    addEmployee(): void{
        const newEmp: UserProfile = {
            userName : this.username, 
            emailId: this.email, 
            password: this.password
        }

        EmployeeDetails.EmpS.push(JSON.stringify(newEmp))
    }

    check(person: UserProfile): boolean{
        for(let i of EmployeeDetails.EmpS){
            let x = JSON.parse(i)
            if (x.userName == person.userName && x.password == person.password) return true;
        }

        return false
    }
    
    
    display(username: string, emailId: string, password: string): string {
        let userObj: UserProfile = {
            userName: username,
            emailId: emailId,
            password: password,
        }

        if(this.check(userObj)){
            return ` User Exists -- Name: ${userObj.userName}`
        }
        else{
            return ` User Not Exists `
        }

        
                    
    }
}





const person1: UserProfile = {
    userName: 'Karuppasamy',
    emailId: 'karu@gmail.com',
    password: 'admin'
}
const person2: UserProfile = {
    userName: 'Rajkumar',
    emailId: 'raj@gmail.com',
    password: 'admin'
}
const emp1 = new EmployeeDetails(person1)
const emp2 = new EmployeeDetails(person2)
emp1.addEmployee()
emp2.addEmployee()


console.log(emp1.display('Karuppasamy', 'karu@gmai.com', 'admin'))
console.log(emp1.display('Rajkumar', 'raj@gmai.com', 'admin')) // Emp1 also check Emp2 details

console.log(EmployeeDetails.EmpS);


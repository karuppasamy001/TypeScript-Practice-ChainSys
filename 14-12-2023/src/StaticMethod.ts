class Employees{
    static EmployeeDetails : string[] = []

    public EmpName: string
    public DateOfJoin: string
    CurrentDate: Date  = new Date()

    constructor(empName: string){
        this.EmpName = empName;
        Employees.EmployeeDetails.push(empName)

        this.DateOfJoin = this.CurrentDate.toISOString()
    
    }

    displayInfo(): void{
        console.log(`Employee Name : ${this.EmpName}`)
        console.log(`Joined : ${this.DateOfJoin}`)
    }
}


const Emp1 = new Employees("Karuppasamy")
const Emp2 = new Employees("Rajkumar")

Emp1.displayInfo()
Emp2.displayInfo()

console.log(Employees.EmployeeDetails)
type Employee = {
    empName: string;
    empAge: number;
    empGender: 'male' | 'female';
};


//Function to display employee information.

const displayEmployeeInfo = (employee: Employee): void => {
    console.log('Employee Information:');
    console.log('Name:', employee.empName);
    console.log('Age:', employee.empAge);
    console.log('Gender:', employee.empGender);
    console.log();
};

const employee_1: Employee = {
    empName: 'Karuppasamy',
    empAge: 22,
    empGender: 'male',
};

const employee_2: Employee = {
    empName: 'Nina',
    empAge: 30,
    empGender: 'female',
};

// Display employee information using the function
displayEmployeeInfo(employee_1);
displayEmployeeInfo(employee_2);

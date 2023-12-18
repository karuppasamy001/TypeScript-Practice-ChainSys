// Basic Types

// String, Number, Boolean
const userName: string = 'Karuppasamy';
const phoneNumber: number = 8870047551;
const isAvailable: boolean = true;

// Object
const userObject: {
    UserName: string;
    PhoneNumber: number;
    IsAvailable: boolean;
} = {
    UserName: userName,
    PhoneNumber: phoneNumber,
    IsAvailable: isAvailable,
};

// Display basic type values
console.log(`Username: ${userName}`);
console.log(`Phone Number: ${phoneNumber}`);
console.log(`Is Available: ${isAvailable}`);
console.log('User Object:', userObject);

// Basic Types II

// Array
const people: string[] = [];

// Add people to the array
people.push('John', 'Rick');

// Display people in the array
for (let i = 0; i < people.length; i++) {
    console.log(`${i + 1}. ${people[i]}`);
}

// Tuple
const personInfo: [string, number] = ['John', 36];

// Display person information from the tuple
console.log('Person Information:', personInfo);

// Enum
enum Size {
    Small,
    Medium,
    Large,
}

const selectedSize = Size.Large;

// Display selected size from the enum
console.log('Selected Size:', selectedSize);

// Any
const mixedArray: any = ['name', 2, true];

// Display mixed array
console.log('Mixed Array:', mixedArray);

// Void
function displayMessage(message: string): void {
    console.log(message);
}

// Display a message using the function
displayMessage('Hello World !');

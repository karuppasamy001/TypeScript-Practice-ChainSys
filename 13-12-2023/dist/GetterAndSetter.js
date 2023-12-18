"use strict";
class UserProfiles {
    constructor(first, second) {
        this.firstName = first;
        this.secondName = second;
    }
    get get() {
        return `FullName : ${this.firstName} ${this.secondName}`;
    }
    set setFirstName(firstName) {
        this.firstName = firstName;
    }
    set setSecondName(secondName) {
        this.secondName = secondName;
    }
}
let user1 = new UserProfiles("karuppasamy", 'selvaraj');
console.log(user1.get); // FullName : karuppasamy selvaraj
// Using the setter method
user1.setFirstName = "Jon";
user1.setSecondName = "Snow";
console.log(user1.get);

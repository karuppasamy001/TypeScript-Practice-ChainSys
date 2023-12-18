class UserProfiles{
    public firstName: string
    public secondName: string

    constructor(first: string, second: string){
        this.firstName = first;
        this.secondName = second;
    }

    public get get(){
        return `FullName : ${this.firstName} ${this.secondName}`
    }

    public set setFirstName(firstName: string){
        this.firstName = firstName
    }

    public set setSecondName(secondName: string){
        this.secondName = secondName
    }

}

let user1 = new UserProfiles("karuppasamy", 'selvaraj')
console.log(user1.get) // FullName : karuppasamy selvaraj


// Using the setter method
user1.setFirstName="Jon"
user1.setSecondName="Snow"

console.log(user1.get)



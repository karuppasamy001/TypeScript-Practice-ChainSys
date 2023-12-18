export interface UserProfile{
    userName: string
    emailId:string,
    password:string,   
}

export interface Display{
    display(username: string, emailId : string, password: string): string
}


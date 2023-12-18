// Class representing a bank
class Bank {
    // Private array to store account details
    private accounts: any[] = [
        {
            accountName: "",
            accountNumber: "",
            accountPin: 0,
            accountBalance: 0
        }
    ];

    // Function to search for an account by account number
    searchAccounts(acNumber: number): boolean {
        for (const account of this.accounts) {
            if (account.accountNumber == acNumber) return true;
        }
        return false;
    }

    // Function to add an account to the bank
    addAccount(acc: any): void {
        this.accounts.push(acc);
        console.log("Account Added Successfully");
    }

    // Function to add money to an account
    addMoney(money: number, accNum: number): void {
        for (const account of this.accounts) {
            if (account.accountNumber == accNum) account.accountBalance += money;
        }
        console.log("Money Added Successfully");
    }

    // Function to withdraw money from an account
    withdrawMoney(money: number, accNum: number, pin: number): void {
        for (const account of this.accounts) {
            if (account.accountNumber == accNum && account.accountPin == pin) {
                if (account.accountBalance >= money) account.accountBalance -= money;
            }
        }
        console.log("Money Withdrawn Successfully");
    }

    // Function to view the balance of an account
    viewBalance(accNum: number, pin: number): void {
        console.log("       ----------------        ");
        let flag = true;
        for (const account of this.accounts) {
            if (account.accountNumber == accNum && account.accountPin == pin) {
                console.log(`Account Holder Name : ${account.accountName}`);
                console.log(`Account Number : ${account.accountNumber}`);
                console.log(`Account Balance : ${account.accountBalance}`);
                flag = false;
            }
        }
        if (flag) console.log("Entered Pin Number or Account Number is Wrong ! ");
        console.log("       ----------------        ");
    }
}

// Class representing an account
class Account {
    // Create an instance of the Bank class
    accounts = new Bank();

    // Public properties
    public acName: string;
    readonly acNumber: number;
    public acPIN: number;
    private acBalance: number;

    // Constructor to initialize account details
    constructor(acName: string, acPIN: number, acNumber: number) {
        this.acName = acName;
        this.acPIN = acPIN;
        this.acNumber = acNumber;
        this.acBalance = 0;
    }

    // Function to add the account to the bank
    addToBank(): void {
        const account = {
            accountName: this.acName,
            accountNumber: this.acNumber,
            accountPin: this.acPIN,
            accountBalance: this.acBalance
        };

        // Check if the account already exists before adding
        if (!this.accounts.searchAccounts(this.acNumber)) this.accounts.addAccount(account);
    }

    // Function to add money to the account
    addMoney(money: number, acNumber: number): void {
        // Check if the account exists before adding money
        if (this.accounts.searchAccounts(this.acNumber)) this.accounts.addMoney(money, acNumber);
    }

    // Function to withdraw money from the account
    withdrawMoney(money: number, acNumber: number, pin: number): void {
        // Check if the account exists before withdrawing money
        if (this.accounts.searchAccounts(this.acNumber)) this.accounts.withdrawMoney(money, acNumber, pin);
    }

    // Function to view the balance of the account
    viewBalance(accNum: number, pin: number): void {
        // Check if the account exists before viewing the balance
        if (this.accounts.searchAccounts(this.acNumber)) this.accounts.viewBalance(accNum, pin);
    }
}

// Create an instance of Account for Member1
const member1 = new Account('Karuppasamy', 12345, 987654321);
member1.addToBank();
member1.viewBalance(987654321, 12345);
member1.addMoney(20000, 987654321);
member1.viewBalance(987654321, 12345);
member1.withdrawMoney(15600, 987654321, 12345);
member1.viewBalance(987654321, 12345);

// Create an instance of Account for Member2
const member2 = new Account('RajKumar', 123, 12345);
member2.addToBank();
member2.addMoney(15300, 12345);
member2.viewBalance(12345, 1234);
member2.viewBalance(12345, 123);

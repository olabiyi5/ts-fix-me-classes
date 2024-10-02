class BankAccount {
    balance: number

    constructor(initialAmount: string) {
        this.balance= 100
        this.balance= 500
    }

    deposit(amount: number): number {
        this.balance += amount;
        return this.balance
    }
}

const myAccount = new BankAccount('500');
console.log(myAccount.deposit(100)) // After fixing: will print 600

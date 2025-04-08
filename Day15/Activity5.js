//Private Fields
//task9:ek account class define karo jisme private fields ho balance ke liye.Deposit aur withdraw ke methods ho jo balance ko update karein(direct access allowed nahi ho)

class Account{
    #balance=0;
    constructor(initialBalance){
        this.#balance=initialBalance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited Amount:${amount} and new Balance is:${this.#balance}`);
        }else{
            console.log("Deposited amount must be greator than 0");
        }
    }

    withDraw(amount){
        if(amount<=this.#balance){
            this.#balance-=amount;
            console.log(`withdraw amount is:${amount} and new balance:${this.#balance}`);
        }else{
            console.log("Insufficient Balance!");
        }
    }

    getBalance(){
        return this.#balance;
    }

}

const myAccount = new Account(1000);
myAccount.deposit(4000);
myAccount.withDraw(2000);
console.log(myAccount.getBalance());

//task10:account class ka ek instance banao deposit aur withdraw methods ka use karo aur har operation ke baad updated balance log kro
const myAccount1=new Account(2000);
myAccount.deposit(4000);
console.log("Balance after deposit:",myAccount.getBalance());
myAccount.withDraw(1000);
console.log("Balance after withdrawl:",myAccount.getBalance());
myAccount.withDraw(6000);
console.log("Balance after withdrwal:",myAccount.getBalance());
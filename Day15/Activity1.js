//Class Defintion
//task1:ek person class define karo jisme name aur age properties ho aur ek method ho jo greeting message return kare.is class ka ek instance banao aur uska greeting message console me log karo.
export class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Name of a person is: ${this.name} and age of a person ${this.age}`);
    }
    updated(newAge){
        this.age=newAge;
    }
}

const obj = new Person("aman",28);
obj.greet();


//task2:person class me ek method add karo jo age property ko update kare aur updated age ko console me dikahye 
obj.updated(30);
obj.greet();
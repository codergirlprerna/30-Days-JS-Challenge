//Getter and setter
//task7:person class me ek getter method banao jo fullName return kare(maan lo firstName aur lastName properties hain ) ek instance banao aur getter ke through full name ko console me dikhao.
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.id=this.id;
    }
    greet(){
        console.log(`Name of a person is: ${this.name} and age of a person ${this.age}`);
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(newName){
        const nameParts=newName.split(" ");
        this.firstName=nameParts[0];
        this.lastName=nameParts[1];
    }
}

const person1=new Person("Prerna","Khanna",24);
console.log("Fullname is:",person1.fullName);

//task8:person class me ek setter method banao jo firstName aur lastName update kare Setter ka use karke name update karo aur updated full name log karo.
person1.fullName="Prerna Sharma";
console.log(person1.fullName);
console.log(person1.firstName);
console.log(person1.lastName);
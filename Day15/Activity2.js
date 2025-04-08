//Class Inheritance

//task3: ek student class define karo jo person class ko extend kare isme ek nayi property studentid aur ek method ho jo student id return kare is class ka ek instance banao or student id log karo.
import { Person } from "./Activity1.js";
class Student extends Person{
    constructor(name,age,studentId){
    super(name,age);
        this.id = studentId;
    }
    greet(){
        console.log(`Name is:${this.name} and age is:${this.age} and id:${this.id}`);
    }
    study(){
        console.log(`Id of student is ${this.id}`);
    }
}

const obj1=new Student("Prerna",24,1);
obj1.study();

//task4:student class me greeting method ko override karo jisme student id bhi message me included ho is overridden message ko console me dikhana hai.
const obj2=new Student("Aman",28,2);
obj2.greet();
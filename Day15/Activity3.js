//static method and properties
//task:5 person class me ek static method banao jo ek generic greeting message return kare is method ko bina koi instance create kiye call karo aur message log karo.
 class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Name of a person is: ${this.name} and age of a person ${this.age}`);
    }

    static genericGreeting(){
        return "Hello! there I am prerna";
    }
}
const message = Person.genericGreeting();
console.log(message);

//task6: student class me static property banao jo total number of students track kare.constructor me is property ko increment karo aur total students log karo.

class Student extends Person{
    static totalStudents=0;
    constructor(name,age,studentId){
    super(name,age);
    this.id=studentId;

    Student.totalStudents++;
    }

    static getTotalStudents(){
        return Student.totalStudents;
    }
}

const student1 = new Student("prerna",24,101);
const student2 = new Student("aman",28,102);

console.log("Total count:",Student.totalStudents);
console.log("Total count:",Student.getTotalStudents());
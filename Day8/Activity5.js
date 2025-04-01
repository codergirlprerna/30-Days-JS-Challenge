//Enhanced Object literal

//task-8: Enhanced object literals ka use karke ek object banao jisme methods aur properties ho aur object ko console par log karo
const name="aman";
const age=27;
const obj={
    name,
    age,
    greet(){
        console.log(`hello my name is ${this.name} and I am ${this.age} years old`);
    },

    ["dynamicProperty"]: "I am dynamic",
}
console.log(obj);
obj.greet();

//task-9 Computed property names ka use karke ek object banao jo variables ke base par property names generate kare aur result object ko console par log kare
const key1="fullname";
const key2="age";
const key3="city";
const person = {
    [key1]:"prerna",
    [key2]:23,
    [key3]:"haryana",
}

console.log(person);



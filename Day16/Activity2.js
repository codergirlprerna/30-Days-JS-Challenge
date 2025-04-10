//Practical Closures

//task3:ek function likho jo unique ids generate kare.Closure ka use karke last generated id ko track karo aur har baar call par increment karo.
function createIdGenerator(){
    let lastId=0;
    return function generateId(){
        lastId++;
        return `ID_${lastId}`;
    };
}

const getId = createIdGenerator();
console.log(getId());
console.log(getId());
console.log(getId());

//task4:ek function banao jo user ka naam capture kare aur ek function retrun kare jo user ko uske nam se greet kare.
function greetUser(name){
    return function(){
        console.log(`Hello,${name}!Welcome back`);
    };
}

const greetPrerna=greetUser("prerna");
const greetAman = greetUser("Aman");

greetAman();
greetPrerna();
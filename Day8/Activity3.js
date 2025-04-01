//Spread and Rest Operators

//task:5 Spread operator ka use karke ek naya array banao jo existing array ke saare elements aur kuch extra elements include kare aur naye array ko console par log karo
const arr=[1,2,3];
const arr1=[...arr];
console.log(arr);

//task-6 Rest operator ka use karke ek function banao jo arbitrary number of arguments accept kare,unka sum calculate kare aur result return kare.

function sum(...numbers){
    return numbers.reduce((acc,num)=> acc+num,0)
}

console.log(sum(2,3,4,5));
console.log(sum(4,5));
console.log(sum(9,5,2));
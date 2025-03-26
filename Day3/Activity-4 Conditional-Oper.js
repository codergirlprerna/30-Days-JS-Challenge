//task-6 Ek program banao jo ternery operator ka use karke check kar ki koi number even hai ya odd aur result console par log karo
const readline = require("readline-sync");
let num = parseInt(readline.question("Enter a number:"));
console.log((num%2==0)?"Even number":"Odd Number");
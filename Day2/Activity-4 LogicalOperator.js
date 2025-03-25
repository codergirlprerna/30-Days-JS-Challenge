// Task 11: && operator ka use karke do conditions ko combine karo aur result console par log karo
let a=5;
let b=6;
let c=4;
if(b>a && c>b) {
console.log("b and c is greator");
}else{
    console.log("Condition is not met");
}

// Task 12: || operator ka use karke do conditons ko combine karo aur result console par log karo

let age =17;
let isEligible = false;
let canVote = (age>=18 || isEligible);
console.log("Candidate is eligible to vote");

// Task 13: ! operator ka use karke condition ko negate kro aur result console par log karo

let Age=5;
if(!Age){
    console.log("Age is:", Age);
}else{
    console.log("Valid age is:",Age);
}
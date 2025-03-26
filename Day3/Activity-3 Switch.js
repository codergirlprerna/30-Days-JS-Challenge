//task-4 Ek program banao jo switch case ka use karke kisi number(1-7) ke basis par week ka day bataye aur result console par log kare.

/*const readline = require("readline-sync");
let num = parseInt(readline.question("Enter a number(1-7):"));
switch(num){
    case 1: 
        console.log("Monday");
        break;
    
    case 2: 
        console.log("Tuesday");
        break;
        
    case 3: 
        console.log("Wednesday");
        break;
    
    case 4: 
        console.log("Thrusday");
        break;
    
    case 5: 
        console.log("Friday");
        break;
    
    case 6: 
        console.log("Saturday");
        break;
    
    case 7: 
        console.log("Sunday");
        break;
    default:
        console.log("You have enter a invalid number!Please enter a valid number");

}*/

//task-5 Ek program banao jo switch case ka use karke kisi score ke basis par grade (A,B,C,D,F) assign kare aur result console par log karo
const readline = require("readline-sync");
let score = parseInt(readline.question("Enter your marks:"));
let grade;
switch(true){
    case (score>=90 && score<=100):
        grade="A";
        break;
    case (score>=80 && score<90):
        grade="B";
        break;
    case (score>=70 && score<80):
        grade="C";
        break;
    case (score>=60 && score<70):
        grade="D";
        break;
    case (score>=0 && score<60):
        grade="F";
        break;
    default:
        console.log("You have entered invalid score");
        grade=null;

}

if(grade){
console.log(`Your grade:${grade}`);
}



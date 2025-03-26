//task-3 Ek program banao jo nested if else statement ka use karke teen number me se sabse bada number find kare aur result console par log karo.
let a=5;
let b=9;
let c=8;
let largest;
if(a>b){
    if(a>c){
        largest=a;
    }else{
        largest=c;
    }
}else{
    if(b>c){
        largest=b;
    }else{
        largest=c;
    }
}

console.log("Largest number is :",largest);
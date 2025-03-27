//task-9 ek program banao jo 1 se 10 tak ke number print kare lekin continue statement ka use karke number 5 ko skip karke
let n=10;
for(let i=1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
}

//task-10 ek program banao jo 1 se 10 tak ke numbers print kare lekin break statement ka use karke jab number 7 aayega tab loop stop ho jayega
let m=10;
for(let j=1;j<=10;j++){
    if(j==7) break;
    console.log(j);
}
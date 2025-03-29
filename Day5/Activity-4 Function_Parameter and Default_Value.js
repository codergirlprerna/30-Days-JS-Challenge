//task-7 ek function banao jo do parameter le aur unka product return kare.Dusre parameter k liye ek default value do.
const prod=(num1,num2=5)=>num1*num2;
console.log(prod(5));
console.log(prod(3,4));

//task-8 Ek function banao jo kisi person ka naam aur age le aur greeting message return kare age k liye ek default value do
const person=(name,age=20)=>`Hello ${name}, you are ${age} years old!`;
console.log(person("prerna",23));
//activity-2 Destructuring

//task-3:Array destructuring ka use karke ek array se first aur second elements extract karo aur console par log karo
const numbers = [1,2,3];
const [a,b,c] = numbers;
console.log(a);
console.log(b);

//task-4:object destructuring ka use karke book object se title aur author properties extract karo aur console par log karo.
const book = {name:"Power of subconcious mind",writter:"Joseph Murphy"};
const {name:title,writter:author} = book;
console.log(title);
console.log(author);
//Creating and exploring modules

//task1:ek module banao jo do numbers ko add karne wali function k export kare.Phir us module ko kisi doosre script me import karke use karo.

import { addNumber } from "./add.js";

const result = addNumber(5,3);
console.log(`Result:${result}`);

//task2:ek module banao jo ek object export kare (uske kuch properties or method ho) is module ko doosre script me import karke access or use kro
import { person } from "./obj.js";
console.log(person.name);
console.log(person.age);
person.greet();
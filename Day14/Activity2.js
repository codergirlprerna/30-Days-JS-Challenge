//named and default exports

//task3:ek module banao jisme multiple functions ho or use named exports ke through export karo..doosre import me in function ka use karke isse import karo.
import { add,subtract,multiply,divide } from "./mathUtils.js";

console.log(add(2,3));
console.log(subtract(5,6));
console.log(multiply(3,4));
console.log(divide(5,3));

//task4:ek module banao jisme ek single function ho jo default export ke through export ho is function ko doosre file me import karke call karo.

import greet from "./greet.js";
greet("prerna");
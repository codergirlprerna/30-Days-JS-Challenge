//Basic Recursion
//task1:Recursive factorial function ek recursive function likho jo kisi number ka factorial calculate kare.kuch test cases ke liye result console mein dikhana hai.
function recursive(n){
    if(n==1 || n==0) return n;
    fact=1;
   return n*recursive(n-1);
}

console.log("Factorial of a number is :" , recursive(8));
console.log("Factorial of a number: " , recursive(5));
console.log("Factorial of a number : " ,recursive(6));
console.log("Factorial of a number : ",recursive(7));

//Recursive fibonacci function
//task2:ek recursive function likho jo nth fibonaci number calculate kare.Alag-alag test cases ka result console log karo.

function fibonacci(n){
    if(n==1 || n==0) return n;

    return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(5));
console.log(fibonacci(8));
nsole.log(fibonacci(6));
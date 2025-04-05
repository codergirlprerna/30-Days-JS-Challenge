//Activity1: Basic Error Handling with try-catch

//task1:Intentional Error Throwing 
// ek function banao jo khud se ek error throw kare with ek informative message is function call ko try-catch block ke andar wrap karo aur agar error aaye to ek proper message console me dikhana hai.

function throwErrorIntentionally(){
    throw new Error("Intentional Error: kuch galat ho gaya!");
}

try{
    throwErrorIntentionally();
}catch(error){
    console.log("Error Caught");
    console.log(error.message);
}

//task2:Division by Zero Check
//ek function design karo jo do numbers ko divide kare.Function ke andar check karo agar denominator 0 hai to ek error throw karo.
//try-catch block ka use karke is error ko handle karo or ek meaningful message log karo.


function divideByNumber(numerator,denominator){
    if(denominator===0){
        throw new Error("Denominator cannot be zero! Zero is not allowed");
    }
    return numerator/denominator;
}

try{
    return result = divideByNumber(12,0);
    console.log("Result:",result);
}catch(error){
    console.log("Error caught while dividing number");
    console.log(error.message);
}
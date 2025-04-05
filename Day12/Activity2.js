//Finally Block

// task3:Execution flow Observation
//ek script banao jisme try-catch aur finally block ho har block me console log karo taaki execution ka order samaj aayega

function TestTryCatchFinally(){
    try{
        console.log("This is try block");
        throw new Error("Oops! Something went wrong");
    }catch(error){
        console.log("Inside catch block");
        console.log("Caught error:",error.message);
    }finally{
        console.log("Inside finally block!Gonna execute no matter what");
    }
    console.log("Outside all these handllers");
}

TestTryCatchFinally();
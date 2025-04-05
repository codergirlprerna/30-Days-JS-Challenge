//Custom error Objects

//task4:Custom error class
//ek custom error class banao jo built in error class ko extend kare.constructor me custom error name aur message define karo.Is error ko ek function me throw karo,aur try-catch blcok me isse handle karo with custom message.

class CustomAppError extends Error{
    constructor(message){
        super(message);
            this.name="CustomAppError";
        }
    }

function riskyFunction() {
    const condition = true;
    if(condition){
        throw new CustomAppError("Something went wrong in risky function");
    }
}

try{
    riskyFunction();
}catch(error){
    if (error instanceof CustomAppError){
        console.log("Caught custom error");
        console.log("Name:",error.name);
        console.log("Message:",error.message);
    }else{
        console.log("Unknown error caught",error);
    }
}

//task:5 Custom error for validation
//ek function banao jo user input validate kare (jaise empty string check karna).Agar validation fail ho to ek custom error object throw karo.Try-catch block ka use karke error ko pakdo aur console me proper feedback do
class InputValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "InputValidationError";
    }
}

function validateUserInput(input){
    if(input.trim() === ""){
        throw new InputValidationError("Input cannot be empty! Enter a valid value");
    }else{
        console.log("Valid input:",input);
    }
}

try{
    const userInput = "";
    validateUserInput(userInput);
}catch(error){
    if(error instanceof InputValidationError){
        console.log("Validation error:",error.message)
    }else{
        console.log("Some unkwnown error occured");
    }
}
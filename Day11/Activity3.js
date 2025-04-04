//Using async/Await

//task4: ek async fucntion likho jo ek promise ka wait kare aur phir uska resolved value log kare.

function delayedMessage(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Promise resolved after two seconds");
        }, 2000);
    });
}

async function handlePromise() {
    console.log("Waiting for promise to resolve");

    const result = await delayedMessage();
    console.log(result);
}

handlePromise();

//task5: ek async function likho jo ek rejected promise ko try-catch ka use karke handle kare aur error message log kare.

function myPromise(){
    return new Promise((reject)=>{
        setTimeout(() => {
            reject("Promise got rejected after 2 seconds");
        }, 2000);
    });
}

async function handleError() {
    try{
        const output = await myPromise();
        console.log(output);
    }catch(err){
        console.log("Error caught:",err);
    }
}

handleError();
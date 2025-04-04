//Concurrent Promises

//task-8 Promise.all ka use karke multiple promises ka wait karo jab tk sab resolve ho jaye aur phir unke values ko log karo

const promise1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Promise1 resolve after 2 seconds");
    }, 2000);
});

const promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise2 resolve after 3 seconds");
    },3000);
});

const promise3 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Promise3 resolved after 1 seconds");
    }, 1000);
});

Promise.all([promise1,promise2,promise3])
.then((results)=>{
    results.forEach((result,index)=>{
        console.log(`Promise ${index+1}:`,result);
    });
})
.catch((error)=>{
    console.log("Error Caught:",error);
});


//task9:promise.race ka use karke pehle resolve hone wale promise ka value log kaaro multiple promise me se

Promise.race([promise1,promise2,promise3])
.then((result)=>{
    console.log("Fastest promise resolved:",result);
})
.catch((error)=>{
    console.log("Error caught:",error);
})
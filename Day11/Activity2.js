//Chaining Promises

//task3:ek sequence of promise banao jo server se data fetch karne ko simulate kare.In promises ko chain karke ek specific order me message log karo


function connectToServer(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Connected to server");
        },1000);
    });
}

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Fetched data from server");
        }, 2000);
    });
}

function processData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data proccessed successfully");
        },1500);
    });
}

function showResult(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Result displayed to user");
        },1000);
    });
}

//promise chaining
connectToServer().then((msg1)=>{
    console.log(msg1);
    return fetchData();
})
.then((msg2)=>{
    console.log(msg2);
    return processData();
})
.then((msg3)=>{
    console.log(msg3);
    return showResult();
}).then((msg4)=>{
    console.log(msg4);
})
.catch((err)=>{
    console.log("Error msg:",err);
})
//Understanding Promises

//task1:ek promise banao jo 2 second ke baad resolve ho ek message ke sathaur us message ko console par log karo

const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hey my name is prerna..Gonna print after 2 seconds");
    },2000)
});

console.log("Start");//To check if it is actually printing after 2 seconds
myPromise.then((message)=>{
    console.log(message);
});

//task2:ek promsie banao jo 2 second ke baad reject ho ek error message ke sath aur error ko .catch() se handle karo

const errPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Not gonna print my name..give error after two seconds")
    },2000);
});

console.log("start");

errPromise.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log("Caught error:",err);
});
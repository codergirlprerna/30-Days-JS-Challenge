//Error handling in promises
//task-6 Promsie rejection handling

//Ek promise banao jo randomly resolve ya reject ho .catch() method ka use karke rejection ko handle karo or user-friendly message console me dikhana hai

const randomPromise = new Promise((resolve,reject)=>{
    const success = Math.random()>0.5;


setTimeout(()=>{
    if(success){
        resolve("Promise resolve successfully");
    }else{
        reject("Promise is rejected");
    }
},1000);
});

randomPromise.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log("Something went wrong",error);
});

//task7:Try-Catch eith Async function
//ek async function banao jo promise ka use karke data fetch karne ke koshish kare .try-catch block ke andar call karo aur agar koi error aaye to ek acha sa error message log karo.


function fetchData(){
    return new Promise((resolve,reject)=>{
        const sucess = Math.random()>0.5;

        setTimeout(()=>{
            if(sucess){
                resolve({name:"Prerna",role:"developer"});
            }else{
                reject("Something went wrong");
            }
        },2000);
    });
}

async function GetData(){
    try{
        const data = await fetchData();
        console.log(data);
    }catch(error){
        console.log("Not working",error);
    }
}

GetData();
//Gracefil Error handling in fetch

//task8:Fetch error handling with .catch()
//fetch api ka use karke data fetch karo kisi invalid url se. or .catch() ka use karo taaki agar network ya koi aur error aaye to handle ho sake aur ek clear error message console me aaye.

fetch("https://invalid-api-url.typicode.com/data")
.then((response)=>{
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})

.then((data)=>{
    console.log("Data fetched:",data);
})
.catch((error)=>{
    console.log("Failed to check data please check your url");
    console.log("Error details",error.message);
});

//task9:Try-catch with async fucntion and fetch
//ek async fucntion banao jo fetch ka use karke invalid url se data request kare .is fetch call ko try -catch block ke andar wrap karo aur agar error aaye to catch blcok me ek detailed error message log karo


async function FetchDataFromInvalidUrl(){
    try{
        const response = await fetch("https://invalid-api-url.typicode.com/data");
        if(!response.ok){
            throw new Error(`HTTPS error! status:${response.status}`)
        }

        const data = await response.json();
        console.log("Data fetched:",data);
    }catch(error){
        console.log("Failed to fetch data some error occured");
        console.log("Error details:",error.message);
    }
}

FetchDataFromInvalidUrl();
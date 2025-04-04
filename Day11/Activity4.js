//Fetching data from a API

//task6:fetch API ka use karke ek public api se data lo aur console me response log karo promises ka use karke


fetch("https://catfact.ninja/fact")
.then((response)=>{
    if(!response.ok){
        throw new Error("network response was not ok");
    }
    return response.json();
})
.then((data)=>{
    console.log("Cat facts:",data.fact);
})
.catch((error)=>{
    console.log("Error message",error);
});

//task7: fetch api ka use krke ek public api se data lo aur console me response log karo async/await ka use karke

async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if(!response.ok){
            throw new Error("Response was not ok");
        }

        const data = await response.json();
        console.log("Data fetched successfully",data);
    }catch(error){
        console.log("Error caught:",error);
    }
}
fetchData();
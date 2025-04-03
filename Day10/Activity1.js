//Basic Event Handling

//task1- Ek button par click event listener add karo jo ek paragraph ka text content change kare

document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("ele").textContent = "This is me prerna khanna";
});

//task2- Ek image par double event listener add karo jo uski visibility ko toggle kare

document.getElementById("myImg").addEventListener("dblclick",function(){
    if(this.style.display === "block"){
        this.style.display = "none";
    }else{
        this.style.display="block";
    }
});
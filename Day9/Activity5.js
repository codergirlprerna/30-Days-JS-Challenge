//Event handling
//task9:ek button par click event listener add karo jo ek paragraph ka text content change kare

document.getElementById("myButton").addEventListener("click",function(){
    document.getElementById("myPara").textContent = "New World!";
});

//task-10 ek element par mouseover listener add karo jo uska border color change kare

let para = document.getElementById("myPara");
para.addEventListener("mouseover",function(){
    para.style.borderColor = "red";
})
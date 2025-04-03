//Mouse Events

//task-3:Ek element par mouseover event listener add karo jo uska background color change kare.
const element  = document.getElementById("head");
element.addEventListener("mouseover",function(){
    element.style.backgroundColor = "red";
})

//task-4 ek element par mouseout event listener add karo jo uska background color reset kare.
element.addEventListener("mouseout",function(){
    element.style.backgroundColor = "blue";
})
//Modifying Attribute and classes

//task-7 ek html element select karo aur uska koi attribute (jaise img tag ka src) change karo
let img  = document.getElementById("myImg");
img.setAttribute("src","image2");

//task-8 ek html element me css class add or remove karo
function add(){
    document.getElementById("myPara").classList.add("red");
}

function remove(){
    document.getElementById("myPara").classList.remove("red");
}

function toggle(){
    document.getElementById("myPara").classList.toggle("red");
}
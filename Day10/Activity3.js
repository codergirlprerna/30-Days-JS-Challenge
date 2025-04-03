//Keyboard Events

//task-5: ek input field par keydown event listener add karo jo console me pressed key log kare
const inputField = document.getElementById("myInput");
inputField.addEventListener("keydown",function(event){
    console.log("Pressed key:",event.key);
});

//task-6 ek input field me keyup event listener add karo jo paragraph me current value display kare
const myPara = document.getElementById("output");
inputField.addEventListener("keyup",function(){
    myPara.textContent = "Current value: " + inputField.value;
});

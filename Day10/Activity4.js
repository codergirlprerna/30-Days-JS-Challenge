// Form Events

// task-7 ek form par submit event listener add karo jo default submission prevent kare aur form data console par log kare

const myform = document.getElementById("myForm");
myform.addEventListener("submit",function(event){
    event.preventDefault();

    const formData = new FormData(myform);
    const formObject = {};
    formData.forEach((value,key)=>{
        formObject[key]=value;
    });
    console.log("Form data: ",formObject);
});

//task-8 ek select dropdown par change event listener add karo jo paragraph me selected value dispaly kare.

const myDropdown =document.getElementById("dropDown");
const output = document.getElementById("myPara");
myDropdown.addEventListener("change",function(){
    output.textContent = "Selected value: " + myDropdown.value;
});
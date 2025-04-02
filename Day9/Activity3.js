//Removing Element

//task-5 ek html element ko select karo aur use dom se remove karo
let element = document.getElementById("ele");
element.remove();

//task-6 kisi specific html element ka last child remove karo

let List=document.getElementById("myList");
if(List.lastElementChild){
    List.removeChild(List.lastElementChild);
}
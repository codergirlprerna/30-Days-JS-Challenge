//Creating and Appending Elements
//task-3 Ek naya div element banao jisme kuch text content ho aur usse body me append karo


let newDiv = document.createElement("div");
newDiv.textContent = "This is new  div";
document.body.appendChild(newDiv);

//task-4 ek naya li element banao aur use ek existing ul list me add karo.
let newLi = document.createElement("li");
newLi.textContent = "This is List3";
document.getElementById('myList').appendChild(newLi);
//Event Delegation

//task-9 ek list par click event listener add karo jo clicked list item ka text content event delegation ka use karke log kare

const mylist = document.getElementById("myList");
mylist.addEventListener("click",function(event){
    if(event.target.tagName === "LI"){
        console.log("Clicked item: ", event.target.textContent);
    }
});

//task-10 ek parent element par event listener add karo jo dynamically added child elements ka events ko listen kare

const myBtn = document.getElementById("addItem");
myBtn.addEventListener("click",function(){
    const newItem = document.createElement("li");
    newItem.textContent = "New Item " + (mylist.children.length + 1);
    mylist.appendChild(newItem);
});
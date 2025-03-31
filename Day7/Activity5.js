//Object Creation

//task-8 for..in loop ka use karke book object ke saare properties ko iterate karo aur har property ka name and value console par log karo

const book={
    title:"Power of subconcious mind",
    author:"joesph murphy",
    year:1999,
    genre:"self help"
}

for (let key in book){
console.log(`${key}:${book[key]}`);
}

//task-9 object.key() and object.value() methods ka use karke book object ke saare keys aur values ko console par log karo
console.log("Using methods");
console.log(Object.keys(book));
console.log(Object.values(book));
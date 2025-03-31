//Nested Objects

//Task-5 Ek nested object banao jo library ko respresent kare jisme properties ho:name aur books(book objects ka array) aur library object ko console par log karo

const library={
    name:"Central Library",
    books:[
        {
            title:"The power of subconcious mind",
            author:"Joseph Murphy",
            year:1993,
        },
        {
            title:"Attitude is Everything",
            author:"Jeff Keller",
            year:1999,
        },
        {
            title:"Atomic Habits",
            author:"James Clear",
            year:2018,
        }
    ]
}

console.log(library);

//task-6 library object me se name ko access karo aur saari books k titles ko console par log karo

console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);
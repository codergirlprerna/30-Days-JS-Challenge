//The this keyword

//task-7 book object me ek method add karo jo this keyword ka use karke book ka title aur year return kare aur us method ko call karke result console par log karo
const library={
    name:"Central Library",
    books:[
        {
            title:"The power of subconcious mind",
            author:"Joseph Murphy",
            year:1993,
            getDetails:function(){
                return `${this.title} and ${this.year}`;
            }
        },
        {
            title:"Attitude is Everything",
            author:"Jeff Keller",
            year:1999,
            getDetails:function(){
                return `${this.title} and ${this.year}`;
            }
        },
        {
            title:"Atomic Habits",
            author:"James Clear",
            year:2018,
            getDetails:function(){
                return `${this.title} and ${this.year}`;
            }
        }
    ],
}

console.log(library.books[0].getDetails());
console.log(library.books[1].getDetails());
console.log(library.books[2].getDetails());


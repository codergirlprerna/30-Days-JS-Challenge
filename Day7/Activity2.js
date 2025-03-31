//Object Methods

//Task 3:Book object me ek method add karo jo book ka title aur author return kare, aur us method ko call karke result console par log karo.c
const book = {
    title:"You Can't Hurt Me",
    Author:"David Goggins",
    year:2015,

    getDetails: function(){
        return `${this.title} by ${this.Author}`;
    }
}

console.log(book.getDetails());

//task-4 Book object me ek method add karo jo ek parameter (year) le aur book ka year property update kare, fir updated object ko console par log karo.


const books = {
    title:"The Alchemist",
    Author:"Paulo Coelho",
    year:2016,

    updateYear:function(newYear){
        this.year=newYear;
    }
}

books.updateYear(2014);
console.log(books);






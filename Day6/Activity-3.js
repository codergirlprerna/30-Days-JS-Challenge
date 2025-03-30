//Array Methods(Intermediate)
//task-7 map() method ka use karke ek naya array banao jisme har number double ho aur result console par log karo
const num = [1,2,3,4,5];
const doubled = num.map(num=>num*2);
console.log(doubled);

//task-8 filter() method ka use karke ek naya array banao jisme sirf even number ho aur result console par log karo
const even = num.filter(num=>num%2===0);
console.log(even);

//task-9 reduce() method ka use karke array ke sabhi number ka sum calculate karo aur result console par log karo
const sum = num.reduce((acc,num)=>acc+num,0);
console.log(sum);
//task-9 Ek higher-order function banao jo ek function aur ek number le aur us function ko utni baar call kare jitna number diya ho.
const repeat = (func,times)=>{
    for(let i=0;i<times;i++){
        func();
    }
};

const sayHello = ()=>console.log("Hello World!");
const name =()=>console.log("This is me prerna");
repeat(sayHello,3);
repeat(name,4);

//task-10 ek higher-order function banao jo do functions aur ek value le,phle function ko value par apply kare,phir dusre function ko result par apply kare.
const applyFunc = (func1,func2,value)=>{
   return func2(func1(value));
};

const multiplyFive = (num)=> num*5;
const AddTwo = (num)=> num+2;

const result = applyFunc(multiplyFive,AddTwo,5);
console.log(result);
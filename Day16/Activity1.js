//Understanding Closures
//task1:ek aisi function likho jo dusre function return kare jisme andar wali function bahar vali function ke variable ko access kare phir us inner function ko call karke result console mein dikhao.
function input(num){
    function square(){
      return  num*num;
    }
    return square();
}


const number = input(4);
console.log(number);

//task2:ek closure banao jo ek private counter maintain kare.Do function implement karo -ek increment karne ke liye aur ek current counter value ko return karne ke liye.
function createCounter(){
    let counter=0;
    function increment(){
        counter++;
    }

    function getValue(){
        return counter;
    }

    return{
        increment,
        getValue
    };

}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());
myCounter.increment();
console.log(myCounter.getValue());
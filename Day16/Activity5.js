//Memoization

//task7:ek aisi function likho jo kisi dusri function ke results ko memoize kare.closure ka use karke pehle ke results store karo.
function memoize(fn){
    const cache={};

    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            console.log("cache se result le rahe hai...");
            return cache[key];
        }else{
            const result=fn(...args);
            cache[key]=result;
            console.log("we are storing new result");
            return result;
        }
    };
}

function slowAdd(a,b){
    for(let i=0;i<1e8;i++){}
    return a+b;
}

const memoizeAdd = memoize(slowAdd);
console.log(memoizeAdd(5,10));
console.log(memoizeAdd(5,10));
console.log(memoizeAdd(10,20));
console.log(memoizeAdd(20,20));

//task8: factorial calculate karne vale ka ek memoized version banao using closure.

function memoize(fn){
    const cache={};
    
    return function(...args){
        const key=JSON.stringify(args);
        if(cache[key]){
            console.log(`Cache hit for input ${key}`);
            return cache[key];
        }else{
            const result=fn(...args);
            cache[key]=result;
            console.log(`Caching and stroing result for input ${key}`);
            return result;
        }
    };
}

function fibonacci(n){
    if(n<=1) return n;
    return memoizedFib(n-1)+memoizedFib(n-2);
}

const memoizedFib=memoize(fibonacci);
console.log("Fibonacci of 5: ",memoizedFib(5));
console.log("Fibonacci of 10:",memoizedFib(10));
console.log("Fibonacci of 30",memoizedFib(30));
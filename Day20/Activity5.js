//Dynamic Programming
//task-10:Fibonacci sequence ko dp se solve karo fibonacci numbers generate karne ke liye dynamic programming ka use karo.Output mein fibonacci sequence print karo.
function fibonacciDP(n){
    let fib=[0,1];
    for(let i=2;i<=n;i++){
        fib[i]=fib[i-2]+fib[i-1];
    }
    console.log("Fibonacci sequence:");
    console.log(fib.join(","));
}

fibonacciDP(10);

//task-11 Knapsack problem ko dp se solve karo knapsack problem ka solution dynamic programming ka use karke nikalo.Maimum value jo achieve ki ja skti hai,usse print karo.
function knapsack(values,weights,capacity){
    let n=values.length;
    let dp = Array(n+1).fill().map(()=>Array(capacity+1).fill(0));

    for(let i=1;i<=n;i++){
        for(let w=0;w<=capacity;w++){
        if(weights[i-1]<=w){
            dp[i][w]=Math.max(values[i-1]+dp[i-1][w-weights[i-1]],dp[i-1][w]);
        }else{
            dp[i][w]=dp[i-1][w];
        }
    }
}
console.log("Maximum value achievable:",dp[n][capacity]);
}

let values=[60,100,120];
let weights=[10,20,30];
let capacity=50;
knapsack(values,weights,capacity);
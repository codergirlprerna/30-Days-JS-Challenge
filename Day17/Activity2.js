//Recursion with arrays
//task3:recursive sum of array elements ek recursive function likho jo array ke sabhi elements ka sum nikale.result ko test cases ke saath console mein log karo.

let arr=[1,2,3,4];
function add(arr,n){
    if(n<=0) return n;
    return add(arr,n-1)+arr[n-1];
}

console.log("Addition of two number: " , add(arr,arr.length));

//task4:Recursive maximum element in array ek recursive function likho jo array ke andar ka maximum elemeent dhoondh ke return kare.test cases ke results console mein log karo.
let arr1=[3,4,5,6];
function max(arr1,n){
    if(n==1) return arr1[0];
    return Math.max(arr1[n-1],max(arr,n-1)); 
}

console.log("Maximum is: " , max(arr1,arr1.length));
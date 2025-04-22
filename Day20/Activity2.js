//Searching Algorithms
//task4:Linear search implement karo linear search bnao jo kisi target value ko array mein dhundhe.Target ki index value print karo.
let arr=[1,4,2,5,6,9,7,10];
let target=7;
let flag =false;
for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        flag=true;
        console.log("Element found at index: " , i);
        break;
    }
}

if(!flag){
    console.log("Element not found");
}

//task5:Binary search algorithm likho jo sorted array mein ek target value ko efficiently dhoondhe uski index print karo.
let array=[1,3,5,7,9,11,13];
let tar=9;
let start=0,end=array.length-1;
let found=false;
while(start<=end){
    let mid=Math.floor((start+end)/2);

    if(array[mid]==tar){
        console.log("Element found at index: " , mid);
        found=true;
        break;
    }else if(array[mid]>tar){
        end=mid-1;
    }else{
        start=mid+1;
    }
}

if(!found){
    console.log("Element not found");
}

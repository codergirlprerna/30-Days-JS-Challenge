//Recursive Search
//task:7 recurive binary search.Ek recursive function likho jo sorted array me binary search kare test cases ka result console me dikhana
function binarySearch(arr,target,low=0,high=arr.length-1){
    if(low>high) return -1;

    while(low<high){
        let mid=Math.floor((low+high)/2);
         if(arr[mid]==target){
            return mid;
         }else if(arr[mid]>target){
           return  binarySearch(arr,target,low,mid-1);
         }else{
           return binarySearch(arr,target,mid+1,high);
         }
    }
}

let arr=[1,3,5,7,9];
console.log("Binary search: " , binarySearch(arr,7));

//task8:Recursive count occurance.Ek recursive function likho jo array mein kisi particular element ki occurance count kare test cases ka result console mein dikhana.
function countOccurance(arr1,target,index=0){
    if(index==arr1.length) return 0;

    if(arr1[index]==target){
        return 1+countOccurance(arr1,target,index+1);
    }else{
        return countOccurance(arr1,target,index+1);
    }
}

let arr1=[1,2,4,6,2,5,3,2];
console.log("Count ocuurances:" ,countOccurance(arr1,2) );
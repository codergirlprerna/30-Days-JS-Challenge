//Array Algorithms
//task-8: Array ko k position se rotate karo ek function likho jo array ko k positions se rotate kare.Rotated array ko print karo.
function rotateArray(arr,k){
    let n=arr.length;
    k=k%n;
    let rotated=arr.slice(n-k).concat(arr.slice(0,n-k));
    console.log("Rotated Array: " , rotated);
}

rotateArray([1,2,3,4,5],2);

//task-9 Do sorted array ko merge karo do sorted arrays ko ek single sorted array mein combine karo.final merged array ko print karo.
function mergeSortedArray(arr1,arr2){
    let merged=[];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        merged.push(arr1[i]);
        i++
    }
    while(j<arr2.length){
        merged.push(arr2[j]);
        j++;
    }
    console.log("Merge Sorted Array: ",merged);
}

mergeSortedArray([1,3,5],[2,4,6]);
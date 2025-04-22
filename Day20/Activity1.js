//Sorting Algorithms.
//task1:bubble sort implement karo ek bubble sort algorithm likho jo kisi array ke numbers ko ascending order mein sort kare.Sorted array ko print karo.
let arr = [1,4,3,2,6,7];
for(let i=0;i<arr.length-1;i++){
    let swapped = false;
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;

            swapped=true;
        }
    }
    if(!swapped){
        break;
    }
}

console.log("Sorted array: " , arr);

//task2:Selection sort implement karo.
//Selection sort algorithm likho jo array ko chhote se bade number ke order mein arrange kare.Result print karo
let array = [2,3,1,5,6,7];

for(let i=0;i<array.length;i++){
    let minIndex=i;
    for(let j=i+1;j<array.length;j++){
        if(array[j]<array[minIndex]){
            minIndex=j;
        }
    }

    if(minIndex!==i){
       let temp=array[i];
       array[i]=array[minIndex];
       array[minIndex]=temp;
    }
}

console.log("Sorted Array: " , array);

//QuickSort implement karo
//QuickSort algorithm likho jo array ke elements ko increasing order mein arrange kare.Sorted array ko output karo.
function quickSort(arrays){
    if(arrays.length<=1){
        return arrays;
    }

    let pivot = arrays[arrays.length-1];
    let left=[];
    let right=[];
    for(let i=0;i<arrays.length-1;i++){
        if(arrays[i]<pivot){
            left.push(arrays[i]);
        }else{
            right.push(arrays[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}

let arrays=[5,3,8,4,2,7,1,10];
let sortedArr=quickSort(arrays);
console.log(sortedArr);
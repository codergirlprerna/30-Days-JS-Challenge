//Third party module
//task:6 npm ka use karke koi third party module install karo(jasie lodash) is module se koi ek function import karo aur use kro script me
import _ from 'lodash';
const arr = [1,2,3,4,5,6,7,8];
const chunkedArray = _.chunk(arr,2);
console.log("Chunked Array:",chunkedArray);

//task7: npm ka use karke axios module install karo.Is module ka use karke kisi public API pe network request bhejna hai aur result ko console me dikhana hai.
import axios from 'axios';
const url="https://catfact.ninja/fact";
axios.get(url)
    .then(Response=>{
        console.log("Data Recieved:");
        console.log(Response.data);
    })
    .catch(error=>{
        console.log("Error fetching data:",error);
    });

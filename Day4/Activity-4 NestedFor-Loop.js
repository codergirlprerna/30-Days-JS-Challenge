/*task 7 & 8: ek program banao jo nested for loop ka use karke yeh pattern print kare
*
**
***
****
*****

A
BC
DEF
GHIJ
KLMNO
*/
for(let i =0;i<=5;i++){
    let star = "";
    for(let j=1;j<=i+1;j++){
        star+='*';
    }
console.log(star);
}


let charCode=65;
for(let k=0;k<5;k++){
    let row = "";
    for(let f=1;f<=k+1;f++){
        row += String.fromCharCode(charCode) + " ";
        charCode++;
    }
    
    console.log(row.trim());
}
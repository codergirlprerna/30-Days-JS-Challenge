//task-7 Ek function banao jo do parameter le aur unka product return kare lekin dusre parameter ke liye ek default value 1 ho function ko second parameter ek saath aur bina second parameter ke call karke result console par log karo
function mul(a,b=1){
    return a*b;
}
console.log(mul(2,3));
console.log(mul(2));
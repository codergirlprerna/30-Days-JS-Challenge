//task-7 Ek program banao jo multiple condition ka use karke check kare ki koi year leap year hai ya nhi (divisible by 4 , but not 100 unless divisble by 400) aur result console par log karo
let year=2025;
if((year%4 == 0 && year%100 != 0 ) || year%400 == 0){
    console.log(`Year is leap year:${year}`);
} else{
    console.log(`Year is not leap year:${year}`);
}
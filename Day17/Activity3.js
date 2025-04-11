//String manipulation with recursion

//task5:recursive string reversal ek recursive function banao jo string ko reverse kare test cases ka result console me log karo
function reverseString(str){
    if(str.length<=0) return str;
    return reverseString(str.slice(1))+str[0];

}

console.log("Reversed hello : " , reverseString("hello"));

//task6:Ek recursive function likho jo check kre ki string palindrome hai kya nhi or different cases ko console par log karo.
function isPalindrome(str,start=0,end=str.length-1){
    if(start>=end) return true;

    if(str[start]!=str[end]) return false;
    return isPalindrome(str,start+1,end-1);
}

console.log("Palindrome: ",isPalindrome("hello"));
console.log("Palindrome: ",isPalindrome("ola"));
console.log("Palindrome : " , isPalindrome("madam"));
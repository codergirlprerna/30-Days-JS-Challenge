//String Algorithms (Strings ke saath kaam karne wala algorithms)
//Task6: Character count karo..ek function likho jo string ke har character ki kitni baar aaya hai uska count kare har character ka count print karo.

function countCharacter(str){
    count={};
    for(let char of str){
        if(count[char]){
            count[char]++;
        }else{
            count[char]=1;
        }
    }

    for(key in count){
        console.log(`${key} : ${count[key]}`);
    }
}

countCharacter("Hello World");

//task7:Longest substring without repeating character dhundoo.Aisi sabse lambi substring dhoondo jisme koi character repeat n ho.us substring ki length ko print karo.
function lengthOfLongestSubstring(str){
    let set = new Set();
    let left=0;
    let maxLength=0;

    for(let right=0;right<str.length;right++){
        while(set.has(str[right])){
            set.delete(str[left]);
        }
        set.add(str[right]);
        maxLength=Math.max(maxLength,right-left+1);
    }
    console.log("Length of longest substring without repeating characters",maxLength);
}
lengthOfLongestSubstring("abcbcbaacc");
/* 
Given two strings, return true if the first string can be built from the letters in the 2nd string
Ignore case .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/*****************************************************************************/
function canBuildS1FromS2(s1, s2) {
    //Code block
    const str1Letters = countLetters(s1.toLowerCase());
    const str2Letters = countLetters(s2.toLowerCase());
    for(key of Object.keys(str1Letters)){
        if(!str2Letters.hasOwnProperty(key)){
            return false;
        }else if(str1Letters[key] > str2Letters[key]){
            return false
        }
    }return true;
}

const countLetters = (str) =>{
    const count = {};
    for(let i=0;i<str.length;i++){
        if(count.hasOwnProperty(str[i])){
            count[str[i]]+=1;
        }else{
            count[str[i]]=1;
        }
    }return count;
}

console.log(canBuildS1FromS2(strA1, strB1));
console.log(canBuildS1FromS2(strA2, strB2));
console.log(canBuildS1FromS2(strA3, strB3));
console.log(canBuildS1FromS2(strA4, strB4));
console.log(canBuildS1FromS2(strA5, strB5));

module.exports = { canBuildS1FromS2 };
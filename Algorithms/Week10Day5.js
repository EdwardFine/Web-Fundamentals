/* 
  Given to me (Neil) in an interview
  Given a string
  What is it about a string that makes it possible for it to become a palindrome?


  A palindrome is a word, phrase, number, or other sequence of characters that reads
  the same forward and backward, ignoring spaces, punctuation, and capitalization.
  
  return whether or not it's possible to make a palindrome out of the string's
  characters.
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;


/*****************************************************************************/

/* READ HERE
For a string to be able to be re-ordered into a palindrome
It must have an even occurrence of every character
Unless it is odd length, then it can have 1 character that
can have an odd number of occurrences.
Another way to look at it would be, if you cancel out ever char that has a pair,
it can be a palindrome if you are left with 0 or 1 char remaining:
- "dad" the "d" cancels with itself to leave "a"
- "daad" the "d" and "a" cancel with itself to leave nothing
- "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

/**
 * This same approach can be done with an array, using .indexOf instead
 * of .hasOwnProperty and .splice instead of delete, but it's much
 * slower that way because .indexOf and .splice would be a nested loops.
 * - Time: O(n) linear, n = str.length.
 * - Space: O(n) linear.
 */

//ddaaddaa
// Function to determine if a string can become a palindrome
const canStringBecomePalindrome=(str)=> {
    const fullStr = str+str;
    for(let i=0;i<str.length;i++){
        if(isPalindrome(fullStr.slice(i,str.length+i))){
            return true;
        }
    }return false;
}

const isPalindrome=(str) =>{ 
    for (var left = 0; left < str.length / 2; left++) {
        var right = str.length - 1 - left;
        if (str[left] != str[right]) {
            return false;
        }
    }return true;
}

const stringAllPossibilities = (str)=>{
    const combos = [];
    for(let i=0;i<str.length;i++){
        combos.push(str.slice(i) + str.slice(0,i));
    }return combos;
}

const functionalIsPalindrome= (str) => stringAllPossibilities(str).filter(isPalindrome).length>0;


console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str4));
console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));

console.log('\n')

console.log(functionalIsPalindrome(str1));
console.log(functionalIsPalindrome(str2));
console.log(functionalIsPalindrome(str3));
console.log(functionalIsPalindrome(str4));
console.log(functionalIsPalindrome(str5));
console.log(functionalIsPalindrome(str6));



module.exports = { canStringBecomePalindrome};
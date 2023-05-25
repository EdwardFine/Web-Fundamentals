/*
    Sum To One Digit - Recursive
    Implement a function sumToOne(num)​ that,
    given a number, sums that number’s digits
    repeatedly until the sum is only one digit. Return
    that final one digit result.

    Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 123456789;
const expected4 = 9;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    if (isNaN(num)){
        return NaN;
    }if (num<=0){
        return 0;
    }
    var sum = num % 10 + sumToOneDigit((num-(num%10))/10);
    while(sum / 10 >= 1){
        sum = sumToOneDigit(sum);
    }return sum;
}

console.log(`${sumToOneDigit(num1)} should equal ${expected1}`);
console.log(`${sumToOneDigit(num2)} should equal ${expected2}`);
console.log(`${sumToOneDigit(num3)} should equal ${expected3}`);
console.log(`${sumToOneDigit(num4)} should equal ${expected4}\n`);


/* 
    String Anagrams - Recursive

    Given a string,
    return array where each element is a string representing a different anagram (a different sequence of the letters in that string).

    Ok to use built in methods
*/

const str_1 = "lim";
const expected_1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter
// limlim
/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str,anagrams=[],part_string="") {
    if (!str) {
        anagrams.push(part_string);
    }
    
    for(var i = 0;i<str.length;i++){
        const leftSlice = str.slice(0, i);
        const rightSlice = str.slice(i + 1);
        generateAnagrams(leftSlice + rightSlice, anagrams, part_string + str[i]);
    }
    return anagrams;
}

console.log(`${generateAnagrams(str_1)} should contain ${expected_1}`);
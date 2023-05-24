/* 
    Recursively reverse a string
    helpful methods:

    str.slice(beginIndex[, endIndex])
    returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */

function reverseStr(str) {
    if(str.length==0){
        return "";
    }else{
        return str[str.length-1] + reverseStr(str.slice(0,str.length-1));
    }
}

console.log(`${reverseStr(str1)} should be ${expected1}`);
console.log(`${reverseStr(str2)} should be ${expected2}\n`);


/*
    Recursive Binary Search

    Input: SORTED array of ints, int value
    Output: bool representing if value is found

    Recursively search to find if the value exists, do not loop over every element.

    Approach:
    Take the middle item and compare it to the given value.
    Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected_1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected_2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected_3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
    var start = 0;
    var end = sortedNums.length -1;
    var middle = Math.floor(sortedNums.length/2);
    if(sortedNums[middle]==searchNum){
        return true;
    }else if(sortedNums.length <=0){
        return false;
    }else if(sortedNums[middle] < searchNum){
        return binarySearch(sortedNums.slice(middle,end),searchNum);
    }else{
        return binarySearch(sortedNums.slice(start,middle),searchNum);
    }
}

console.log(`${binarySearch(nums1,searchNum1)} should be ${expected_1}`);
console.log(`${binarySearch(nums2,searchNum2)} should be ${expected_2}`);
console.log(`${binarySearch(nums3,searchNum3)} should be ${expected_3}`);

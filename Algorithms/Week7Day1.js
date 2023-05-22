/*

Recursion is when a function calls itself, using a different input each itteration. (I.E. Taking the original paremeter, and adding 1 to it each time you call that function again).

Recursion is used to break up more complex operations into a series of smaller tasks that are easier to interpret/read. 

When building a recursive function you need to make sure it has an end condition to avoid an infinite loop/stack overflow error.


function ittNumber(num, end){

    if(num == end){
        return 'completed!';
    }

return ittNumber(num++, end)
}

*/

/* 
    Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
    var sum=0;
    if(nums.length > 0){
        sum += nums.shift();
        sum += sumArr(nums);
    }return sum;
}

console.log(`${sumArr(nums1)} should equal ${expected1}`)
console.log(`${sumArr(nums2)} should equal ${expected2}`)
console.log(`${sumArr(nums3)} should equal ${expected3}\n`)

/*****************************************************************************/

/* 
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1_1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2_2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3_3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) { 
    var sum=0;
    num = parseInt(num)
    if(num>0){
        sum += num;
        num--;
        sum += recursiveSigma(num);
    }
    return sum;
}

console.log(`${recursiveSigma(num1)} should equal ${expected1_1}`)
console.log(`${recursiveSigma(num2)} should equal ${expected2_2}`)
console.log(`${recursiveSigma(num3)} should equal ${expected3_3}`)

/*****************************************************************************/
/* 
    Given an array of integers
    return the index where the smallest integer is located

    return -1 if there is no smallest integer (array is empty) 
    since -1 is not a valid index, this indicates it couldn't be found

    If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expected1 = 1;
console.log(indexOfMinVal(nums1));

const nums2 = [5, 4, 2, 2, 3];
const expected2 = 2;
console.log(indexOfMinVal(nums2));

const nums3 = [];
const expected3 = -1;
console.log(indexOfMinVal(nums3));

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
    // code here
    index = 0;
    if (nums.length ==0){
        return -1;
    }
    else{
        for(var i=0;i<nums.length;i++){
            if (nums[i] < nums[index]){
                index = i;
            }
        }
    }
    return index;
}


/*******************************************************************************/

/* 
    Given an array, reverse it's items in place
    return the array after reversing it

    Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expected5 = [3, 2, 1];
console.log(reverseArr(arr1));

const arr2 = ["a", "b"];
const expected6 = ["b", "a"];
console.log(reverseArr(arr2));

const arr3 = ["a"];
const expected7 = ["a"];
console.log(reverseArr(arr3));

const arr4 = [];
const expected4 = [];
console.log(reverseArr(arr4));

const arr5 = [1,2,3,4,5,6,7,8,9,10];
const expected8 = [10,9,8,7,6,5,4,3,2,1];
console.log(reverseArr(arr5));

/**
 * Reverses the given arr in place without built in methods
 * BONUS: Do this in place without built ins
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
    // code here
    var temp;
    var length = items.length;
    for(var i=0;i<length/2;i++){
        temp = items[i];
        items[i] = items[length-1-i];
        items[length -1-i] = temp;
    }
    return items;
}
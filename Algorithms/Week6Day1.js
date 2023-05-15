/* 
    Balance Index:
    Here, a balance point is ON an index, not between indices.
    Return the balance index where sums are equal on either side
    (exclude its own value).
    Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1,4,6,3,6,8,6];
const expected3 = 4;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if(nums.length < 3){
        return -1;
    }
    var left = 0;
    var right = 0;
    for(var i = 0; i < nums.length; i++){
        left += nums[i];
        right = 0;
        for(var j = nums.length - 1; j > i + 1; j--){
            right += nums[j];
        }
        if(left === right){
            return i + 1;
        }
    }
    return -1;
}

console.log(`${balanceIndex(nums1)} should equal ${expected1}`);
console.log(`${balanceIndex(nums2)} should equal ${expected2}`);
console.log(`${balanceIndex(nums3)} should equal ${expected3}`);

/*****************************************************************************/
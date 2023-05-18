// Array: Binary Search (non recursive)

//     Given a sorted array and a value, return whether the array contains that value.
//     Do not sequentially iterate the array. Instead, ‘divide and conquer’,
//     taking advantage of the fact that the array is sorted .

//     Bonus (alumni interview): 
//     first complete it without the bonus, because they ask for additions
//     after the initial algo is complete

//     return how many times the given number occurs


const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 12;

function binaryCount(sortedNums, searchNum) {
    var start = 0;
    var end = sortedNums.length - 1

    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (sortedNums[mid] == searchNum) {
            index = mid;
            count = 1;
            while (sortedNums[index] == searchNum) {
                index--;
                if (sortedNums[index] == searchNum) {
                    count++;
                }
            }
            index = mid;
            while (sortedNums[index] == searchNum) {
                index++;
                if (sortedNums[index] == searchNum) {
                    count++;
                }
            }
            return count;
        }
        if (sortedNums[mid] < searchNum) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
/*
Via while loop:
function binarySearch(sortedNums, searchNum) {
    // A while loop is appropriate here because we don't know the necessary length of the array!
    // Assume the array is SORTED lowest to highest!

    // With divide and conquer, a good place to start is the MIDDLE!
    var start = 0;
    var end = sortedNums.length -1

    while(start <= end){
        var mid = Math.floor((start + end)/2);
        if(sortedNums[mid]==searchNum){
            return true;
        }
        if(sortedNums[mid] < searchNum){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return false;
}
*/

//Via recursion
function binarySearch(sortedNums, searchNum) {
    // A while loop is appropriate here because we don't know the necessary length of the array!
    // Assume the array is SORTED lowest to highest!

    // With divide and conquer, a good place to start is the MIDDLE!
    var start = 0;
    var end = sortedNums.length - 1;
    var mid = Math.floor((start + end) / 2);

    if (sortedNums[mid] == searchNum) {
        return true;
    }
    if(sortedNums.length ==0){
        return false;
    }
    if (sortedNums[mid] < searchNum) {
        slicedNums = sortedNums.slice(mid+1,end);
        return binarySearch(slicedNums,searchNum);
    } else {
        slicedNums = sortedNums.slice(start,end-1);
        return binarySearch(slicedNums,searchNum);
    }
}

console.log(`${binarySearch(nums1, searchNum1)} should equal ${expected1}`)
console.log(`${binarySearch(nums2, searchNum2)} should equal ${expected2}`)
console.log(`${binarySearch(nums3, searchNum3)} should equal ${expected3}`)
console.log(`${binaryCount(nums4, searchNum4)} should equal ${expected4}`)

/*****************************************************************************/
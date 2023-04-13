/* 
Given an array and an int which represents the position starting from the back,
return the nth-to-last element.
JS has introduced the .at method for this purpose, but solve this algo w/o it.
*/

// Last element:
const arr1 = ["a", "b", "c", "d"];
const idx1 = 1;
const expected1 = "d";

// Second to last element:
const arr2 = ["a", "b", "c", "d"];
const idx2 = 2;
const expected2 = "c";

const arr3 = ["a", "b", "c", "d"];
const idx3 = 0;
const expected3 = null;

const arr4 = ["a", "b", "c", "d"];
const idx4 = -1;
const expected4 = null;

const arr5 = [];
const idx5 = 2;
const expected5 = null;

const arr6 = ["a", "b", "c", "d"];
const idx6 = 5;
const expected6 = null;

/**
 * Retrieves the nth to last indexed item from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {number} nthToLast
 * @returns {any} The item at the nthToLast index or null.
 */
function nthLast(items, nthToLast) {
    // code here
    if(nthToLast <=0 || nthToLast >items.length){
        return null;
    }
    return items[items.length -nthToLast];
}

// Tests
const result1 = nthLast(arr1, idx1);
console.log(result1, "should be", expected1);

const result2 = nthLast(arr2, idx2);
console.log(result2, "should be", expected2);

const result3 = nthLast(arr3, idx3);
console.log(result3, "should be", expected3);

const result4 = nthLast(arr4, idx4);
console.log(result4, "should be", expected4);

const result5 = nthLast(arr5, idx5);
console.log(result5, "should be", expected5);

const result6 = nthLast(arr6, idx6);
console.log(result6, "should be", expected6);

/*****************************************************************************/
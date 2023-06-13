/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.

    A multiset union is a combination of two multisets that includes all elements from both sets
    (arrays that can contain duplicate elements). In the case of duplicates,
    the union should have the maximum count of that element from either set.

    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top)
    https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/* 
    Explanation: Every int from each set is included in the result, 
    for dupes, like 2, include it 3 times, because it occurs 3 times at most in ONE set
*/
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
const orderedMultisetUnion = (sortedA, sortedB) =>{
    //Code goes here
    const countA = countNums(sortedA);
    const countB = countNums(sortedB);
    const joined = [];
    for(num in countA){
        let count=0;
        if(countB.hasOwnProperty(num)){
            if(countA[num] > countB[num]){
                count=countA[num]
            }else{
                count = countB[num]
            }delete countB[num]
        }else{count=countA[num]}
        for(let i =0;i<count;i++){
            joined.push(parseInt(num))
        }
    }for(num in countB){
        for(let i=0;i<countB[num];i++){
            joined.push(parseInt(num));
        }
    }
    return joined.sort((a,b)=>a-b);
}

const countNums =(nums) =>{
    const count = {}
    for(num of nums){
        if(count.hasOwnProperty(num)){
            count[num] ++;
        }else{
            count[num] = 1;
        }
    }
    return count;
}

console.log(`${nums1A} and ${nums1B} combined are ${orderedMultisetUnion(nums1A, nums1B)}. Expected: ${expected1}`);
console.log(`${nums2A} and ${nums2B} combined are ${orderedMultisetUnion(nums2A, nums2B)}. Expected: ${expected2}`);
console.log(`${nums3A} and ${nums3B} combined are ${orderedMultisetUnion(nums3A, nums3B)}. Expected: ${expected3}`);
console.log(`${nums4A} and ${nums4B}combined are ${orderedMultisetUnion(nums4A, nums4B)}. Expected: ${expected4}`);
console.log(`${nums5A} and ${nums5B}combined are ${orderedMultisetUnion(nums5A, nums5B)}. Expected: ${expected5}`);



/*****************************************************************************/


module.exports = { orderedMultisetUnion };
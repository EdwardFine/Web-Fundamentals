/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];

const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];

const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];

const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    const intersection = [];
    for(const element of sortedA){
        if(sortedB.includes(element) && !intersection.includes(element)){
            intersection.push(element)
        }
    }
    /*
    Without Built in methods
    for(let i =0;i<sortedA.length;i++){
        let included = false
        for(let z = 0; z<intersection.length;z++){
            if(sortedA[i] === intersection[z]){
                included=true;
                break;
            }
        }
        if(!included){
            for(let j=0;j<sortedB.length;j++){
                if(sortedA[i] === sortedB[j]){
                    intersection.push(sortedA[i])
                    break;
                }
            }
        }
    }
    */
    return intersection
}
console.log(`${numsA1} and ${numsB1} share ${orderedIntersection(numsA1, numsB1)}`);
console.log(`${numsA2} and ${numsB2} share ${orderedIntersection(numsA2, numsB2)}`);
console.log(`${numsA3} and ${numsB3} share ${orderedIntersection(numsA3, numsB3)}`);


/*****************************************************************************/


module.exports = { orderedIntersection };
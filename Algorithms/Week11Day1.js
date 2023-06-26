/* 
    Given by Riot games. Rehash an incorrectly hashed string 
    by combining letter count occurrences and alphabetizing them.
*/

const str1 = "b70a164c32a20c10j3a15";
const expected1 = "a199b70c42j3";

/**
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */

const isAlpha = str => /^[a-zA-Z]*$/.test(str)
const isNumber = str => /^[0-9]*$/.test(str)

const rehash =(str)=>{
    const counts = {};
    const sortedCounts={};
    let rehash = "";
    let i=0;
    while(i<str.length){
        let end=i+1;
        if(isAlpha(str[i])){
            let letter=str[i]
            let number = "";
            while(isNumber(str[end])){
                number+=str[end];
                end++;
            }
            number = parseInt(number);
            if(counts.hasOwnProperty(letter)){
                counts[letter]+=number
            }else{
                counts[letter]=number
            }
            i=end-1;
        }i++;
    }
    Object.keys(counts).sort().forEach((v,i)=>sortedCounts[v]=counts[v]);
    for(key in sortedCounts){
        rehash += key + sortedCounts[key];
    }
    return rehash;
}

console.log(rehash(str1));  // Output: "a199b70c42j3"
/*****************************************************************************/

module.exports = { rehash };
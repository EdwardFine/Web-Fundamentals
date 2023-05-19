/* 
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { half_dollar:1 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = {half_dollar:1, quarter: 1, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents){
    var coins = []
    if(Math.floor(cents / 50)>0){
        coins.push({half_dollar:Math.floor(cents / 50)});
        cents = cents % 50;
    }
    if(Math.floor(cents / 25)>0){
        coins.push({quarter:Math.floor(cents / 25)});
        cents = cents % 25;
    }
    if(Math.floor(cents / 10)>0){
        coins.push({dime:Math.floor(cents / 10)});
        cents = cents % 10;
    }
    if(Math.floor(cents / 5)>0){
        coins.push({nickel:Math.floor(cents / 5)});
        cents = cents % 5;
    }
    if(cents>0){
        coins.push({penny:cents});
    }
    return coins;
}

console.log(`${JSON.stringify(fewestCoinChange(cents1))} should equal ${JSON.stringify(expected1)}.`)
console.log(`${JSON.stringify(fewestCoinChange(cents2))} should equal ${JSON.stringify(expected2)}.`)
console.log(`${JSON.stringify(fewestCoinChange(cents3))} should equal ${JSON.stringify(expected3)}.`)
console.log(`${JSON.stringify(fewestCoinChange(cents4))} should equal ${JSON.stringify(expected4)}.`)


/*****************************************************************************/
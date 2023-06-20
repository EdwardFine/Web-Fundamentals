/* 
  Given a search criteria object, whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  
  Bonus: write a 2nd solution using built in methods to practice functional
  programming.
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};

const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};

const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];


/*****************************************************************************/

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(n * m) n = collection.length, m = num of keys in criteria.
 * - Space: O(n) linear. All objects in collection could be a match.
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) {
    const matches = [];
    for(person of collection){
        let valid=true;
        for(key in criteria){
            if(person[key] === criteria[key]){
                continue;
            }else{
                valid=false;
                break;
            }
        }if(valid){
            matches.push(person);
        }
    }return matches;
}

console.log(findObjects(searchCriteria1, items));
console.log(findObjects(searchCriteria2, items));
console.log('-----------------------------------')

const findObjectsFunctional = (criteria, collection) => collection.filter((item) => Object.keys(criteria).every((key) => item[key] === criteria[key]))

console.log(findObjectsFunctional(searchCriteria1, items));
console.log(findObjectsFunctional(searchCriteria2, items));

module.exports = { findObjects, findObjectsFunctional };
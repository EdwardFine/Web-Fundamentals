/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
*/

//const { Collection } = require("mongoose");

const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false,
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false,
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false,
    },
  ];
  
  const id1 = 3;
  const updateData1 = { redBeltStatus: true, isLateToday: true };
  const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
  };
  
  const id2 = 1;
  const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
  };
  const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
  };
  /* 
    Explanation: In this implementation randomKey was not added because it is not an existing key that can be updated
  */
  const id3 = 5;
  const updateData3 = {};
  const expected3 = null;
  
  /*****************************************************************************/
  
  /**
   * Finds the specified obj by id and updates it with the given key value pairs.
   * - Time: O(n + m) linear, n = collection.length. m = updatedVals num of keys.
   *    Worst case is looping through the full collection because no id matched.
   *    updatedVals is only looped over one time despite being a nested loop
   *    since it is within a condition, hence we use addition instead of
   *    multiplication in the Big O notation.
   * - Space: O(1) constant.
   * @param {number} id
   * @param {Object} updatedVals Key value pairs used to update the found obj.
   * @param {Array<Object>} collection
   * @returns {?Object} The object that was updated or null if no object found.
   */
  
  function findByIdAndUpdate(updateId, updatedVals, collection) {
    for(student of collection){
        if(student.id === updateId){
            for(val in updatedVals){
                student[val] = updatedVals[val];
            }
            return collection;
        }
    }return null;
  }
  console.log(`${JSON.stringify(findByIdAndUpdate(id1, updateData1, students)[2])}. Expected: ${JSON.stringify(expected1)}.\n`);
  console.log(`${JSON.stringify(findByIdAndUpdate(id2, updateData2, students)[0])}. Expected: ${JSON.stringify(expected2)}.\n`);
  console.log(`${JSON.stringify(findByIdAndUpdate(id3, updateData3, students))}. Expected: ${JSON.stringify(expected3)}.`);
  
  module.exports = {findByIdAndUpdate};
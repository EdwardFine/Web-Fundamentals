/* 
    Given an array of objects representing people, and a string representing a bad habit
    return a "santasNaughtyList" containing the first and last names of all the people who
    have the matching bad habit so that santa knows how much coal he needs.
    
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
    {
        firstName: "Alex",
        lastName: "Miller",
        habits: ["doesn't wash dishes","falls asleep in lecture","shows up early"],
    },
    {
        firstName: "Martha",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Roger",
        lastName: "Anderson",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Rick",
        lastName: "James",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Alex Miller", "Roger Anderson"];

const badHabit2 = "shows up late";
const expected2 = ["Martha Smith", "Roger Anderson"];

const badHabit3 = "vapes too much";
const expected3 = [];

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {
    //Code block
    const badpersons = [];
    for(let i=0;i<persons.length;i++){
        if(persons[i].habits.includes(badHabit)){
            badpersons.push(`${persons[i].firstName} ${persons[i].lastName}`)
        }
    }
    return badpersons;
}
console.log(`People with the bad habit of ${badHabit1} are ${santasNaughtyList(students, badHabit1)}. Expected: ${expected1}`);
console.log(`People with the bad habit of ${badHabit2} are ${santasNaughtyList(students, badHabit2)}. Expected: ${expected2}`);
console.log(`People with the bad habit of ${badHabit3} are ${santasNaughtyList(students, badHabit3)}. Expected: ${expected3}`);

/**
 * Finds a list of people whose habits contain the given bad habit. 
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
const santasNaughtyListFunctional=(persons, badHabit)=> persons.filter((p,i)=>p.habits.includes(badHabit)).map((p,i)=>`${p.firstName} ${p.lastName}`);


console.log(`People with the bad habit of ${badHabit1} are ${santasNaughtyListFunctional(students, badHabit1)}. Expected: ${expected1}`);
console.log(`People with the bad habit of ${badHabit2} are ${santasNaughtyListFunctional(students, badHabit2)}. Expected: ${expected2}`);
console.log(`People with the bad habit of ${badHabit3} are ${santasNaughtyListFunctional(students, badHabit3)}. Expected: ${expected3}`);

/*****************************************************************************/


module.exports = {santasNaughtyList,santasNaughtyListFunctional};
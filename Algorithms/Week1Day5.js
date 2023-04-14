/*
More info about Array Functions!

Add a value to the end of an array.
push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Remove the value at the end of the array (returns the popped value!)
pop(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

Add a value to the front of an array.
unshift(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

Remove the value at the front of an array (returns the shifted value!)
shift(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

*/


// Write a function to reverse the values in a given array.

// Build your own array lists as a group, so share some of your favorite movies, games, or even pokemon! (Or make up your own!)
var favMovies = [];
var favGames = [];
var favPokemon = [];

var boringArr = ['a', 'b', 'c', 'd', 'e', 'f'];

// var boringTemp = boringArr[2]

// LEVEL 1:

// function reverse(arr) {
//     var temp = "";
//     var length =arr.length;
//     var i=0;
//     while(i<length/2){
//         temp = arr[i];
//         arr[i]=arr[length-1-i];
//         arr[length-1-i]=temp;
//         i++;
//     }
//     return arr;
// }

// function reverse(arr) {
//     var temp = "";
//     var length =arr.length;
//     for(var i=0;i<length/2;i++){
//         temp = arr[i];
//         arr[i]=arr[length-1-i];
//         arr[length-1-i]=temp;
//         i++;
//     }
//     return arr;
// }

// LEVEL 2

// function reverse(arr) {
//     let revArr = []
//     while (arr.length > 0) {
//         revArr.push(arr.pop())
//     }
//     console.log(revArr)
//     return revArr
// }

// LEVEL 3

function reverse(arr) {
    var originalLen = arr.length;
    for(var i=0;i<originalLen;i++){
        arr.unshift(arr[i*2]);
    }
    for(var j=0;j<originalLen;j++){
        arr.pop();
    }
    console.log(arr);
    return arr;
}

reverse(boringArr);

// Optional Challenges!
// Level 1: Construct the function with both a For Loop and then a While Loop. (Watch out for infinite loops!)
// Level 2: Knowing .pop() RETURNS the removed value, find a way to use this to move a value to the other side.
// Level 3: Create the function in a way that reverses the Array "in place" where you don't create a new Array and use a temp variable!
// (Hint: This one can be challenging, so don't stress this one!)
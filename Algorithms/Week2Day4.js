var arr2d = [
    [2, 5, 8],[3, 6, 1],[5, 7, 7]
];

var arr = [
    2, 5, 8, 3, 6, 1 ,5, 7, 7
];
// Use https://pythontutor.com/javascript.html#mode=edit if you would like to visualize the nested for loops!


function isPresent2d(arr2d, value) {
    // your code here
    for(var i=0; i<arr2d.length;i++){
        for(var j=0;j<arr2d[i].length;j++){
            if (arr2d[i][j] == value){
                return true;
            }
        }
    }
    return false;
}

// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for(var i=0; i<arr2d.length;i++){
        for(var j=0;j<arr2d[i].length;j++){
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

console.log(isPresent2d(arr2d,9))


var result = flatten(arr2d);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
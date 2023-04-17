// function d6(sides, counter) {
//     var rolls =[];
//     var rand;
//     // your code here
//     for(var i=0;i<counter;i++){
//         rand = Math.ceil(Math.random()*sides);
//         rolls.push(rand);
//     }
//     return rolls;
// }

function d6(sides, counter, diceCheck) {
    var rolls =0;
    var rand;
    // your code here
    for(var i=0;i<counter;i++){
        rand = Math.ceil(Math.random()*sides);
        rolls+=rand;
    }
    if(rolls >= diceCheck){
        return [rolls,"You've slain the monster!"];
    }else{
        return [rolls, "The monster's slain you!"];
    }
}


    
var playerRoll = d6(6, 3, 9);
console.log("The player rolled: " + playerRoll[0] + ": " + playerRoll[1]);


/*
Dice Roller
Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

Bonus Challenges
Level 1: Modify the function to roll for a dice with any side based on a sides parameter.
Level 2: Add another parameter for the number of die to roll and return each of the rolls performed as an array.
Level 3:Include another parameter that represents a "Dice Check" and the dice roll must meet or exceed that Dice Check value. 
        Return "You've slain the monster!" if you meet or exceed the Dice Check, otherwise return "The monster's slain you!"
*/

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getRandomAnswer(answers, counter){
    var rand;
    var response = [];
    for(var i=0; i<counter;i++){
        rand = Math.floor(Math.random() * answers.length);
        response.push(answers[rand]);
        answers[rand]=answers.pop();
    }
    return response;
}

console.log(getRandomAnswer(lifesAnswers, 20));

/*
Consult The Oracle (Magic 8 Ball)
Using the following array, write a function that will answer all of our questions by randomly choosing a response

Bonus Challenges
Level 1: Include a parameter for the array for the function to use.
Level 2: Add another parameter for number of random responses and return an array of each result. (Avoiding repeats is optional!)
*/
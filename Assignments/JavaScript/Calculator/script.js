var displayDiv = document.querySelector("#display");
var input1 = "";
var input2 = "";
var operator = "";
var answer;

function press(value){
    if(input1 == answer && operator == ""){
        input1 ="";
    }
    if(operator == "" || input1 == ""){
        input1 += value;
        displayDiv.innerText = input1;
    }
    else{
        input2 += value;
        displayDiv.innerText = input2;
    }
}

function setOP(op){
    if(operator == ""){
        displayDiv.innerText = "0";
    }else if (input2 != ""){
        displayDiv.innerText = input2;
    }
    operator = op;
}

function calculate(){
    input1 = parseFloat(input1);
    input2 = parseFloat(input2);
    if(input1 != NaN && input2 != NaN){
        switch(operator){
            case "+":
                answer = input1 + input2;
                break;
            case "-":
                answer = input1 - input2;
                break;
            case "*":
                answer = input1 * input2;
                break;
            case "/":
                answer = input1 / input2;
                break;
        }
    }
    clr();
    if(answer != undefined){
        displayDiv.innerText = answer;
        input1 = answer.toString();
        console.log(input1);
    }
}

function clr(){
    displayDiv.innerText = "0";
    input1 = "";
    input2 = "";
    operator = "";
}
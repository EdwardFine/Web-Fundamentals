var header = document.querySelector("#minesweeper-header");
var difficulty = 1;
var mine_count = document.querySelector("#mine-count");
var time_dispay = document.querySelector("#time");
var face_button = document.querySelector("#face-button");
var minefield = document.querySelector("#minefield");


initializeGame();

function initializeGame(){
    initializeHeader();
    initializeMineField();
    stopTime();
}

function initializeHeader(){
    initializeMineCount();
    initializeFace();
    initializeTime();
}

function initializeMineField(){
    minefield.innerHTML=""
    if(difficulty==1){
        minefield.style.width = 16*9 + "px";
        minefield.style.height = 16*9 + "px";
        for(var i=0;i<(9*9);i++){
            minefield.innerHTML+=`<div class="unmarked-block" onmousedown="pressBlock(this)" onmouseleave="unpressBlock(this)" onmouseup"checkBlock(${i},${Math.floor(i/9)},this)"></div>`
        }
    }else if (difficulty==2){
        minefield.style.width = 16*16 + "px";
        minefield.style.height = 16*16 + "px";
        for(var i=0;i<(16*16);i++){
            minefield.innerHTML+=`<div class="unmarked-block"></div>`
        }
    }else{
        minefield.style.width = 16*30 + "px";
        minefield.style.height = 16*16 + "px";
        for(var i=0;i<(16*30);i++){
            minefield.innerHTML+=`<div class="unmarked-block"></div>`
        }
    }
}

function initializeFace(){
    face_button.className = ""
    face_button.classList.add("facesmile");
}

function initializeMineCount(){
    mine_count.innerHTML ="";
    mine_count.innerHTML += '<div class="number-0"></div>';
    //Easy
    if(difficulty ==1){
        mine_count.innerHTML += '<div class="number-1"></div>';
        mine_count.innerHTML += '<div class="number-0"></div>';
    }//Medium
    else if(difficulty==2){
        mine_count.innerHTML += '<div class="number-4"></div>';
        mine_count.innerHTML += '<div class="number-0"></div>';
    }//Hard
    else{
        mine_count.innerHTML += '<div class="number-9"></div>';
        mine_count.innerHTML += '<div class="number-9"></div>';
    }
}

function initializeTime(){
    time_dispay.innerHTML="";
    for(var i=0;i<3;i++){
        time_dispay.innerHTML +='<div class="number-0"></div>';
    }
}

var ones=0;
var tens=0;
var hundreds=0;
var intervalID;
function trackTime(){
    var elapsed;
    intervalID =setInterval(function(){
        elapsed = Math.round((new Date() - start)/1000);
        ones = elapsed % 10;
        tens = Math.floor(elapsed % 100 -ones)/10;
        hundreds = Math.floor(elapsed/100);
        updateTime();
        if(ones == 9 && tens ==9 && hundreds ==9){
            stopTime();
        }
    },1000)
}

function updateTime(){
    time_dispay.innerHTML="";
    time_dispay.innerHTML +=`<div class="number-${hundreds}"></div>`;
    time_dispay.innerHTML +=`<div class="number-${tens}"></div>`;
    time_dispay.innerHTML +=`<div class="number-${ones}"></div>`;
}

function stopTime(){
    clearInterval(intervalID);
}



function updateDifficulty(level){
    difficulty = level;
    initializeGame();
}
function pressFace(){
    face_button.classList.add("facesmile-pressed");
}
function unpressFace(){
    face_button.classList.remove("facesmile-pressed");
}
function pressBlock(element){
    element.classList.add("pressed-block");
    console.log("Press");
}
function unpressBlock(element){
    element.classList.remove("pressed-block");
    console.log("unpress");
}


function resetGame(element){
    unpressFace();
    start = new Date();
    stopTime();
    trackTime();
}

function checkBlock(i,j,element){
    unpressBlock(element);
    console.log(i,j);
}
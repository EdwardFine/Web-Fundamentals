var second_hand = document.querySelector("#seconds")
var minute_hand = document.querySelector("#minutes")
var hour_hand = document.querySelector("#hour")

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    var hours_angle = ((360 * (time % 43200) / 43200) +180) %360;
    var minutes_angle = ((6*(time % 3600)/60)+180) %360;
    var seconds_angle = ((6 * (time % 60))+180)%360;

    second_hand.style.transform = `rotate(${seconds_angle}deg)`;
    minute_hand.style.transform = `rotate(${minutes_angle}deg)`;
    hour_hand.style.transform = `rotate(${hours_angle}deg)`;

    // your code here

}, 1000);

var notif = document.querySelectorAll(".notif-font");
var requests = parseInt(notif[0].innerText);
var connections = parseInt(notif[1].innerText);
var userName = document.querySelector("h1")
console.log(userName);

function process(element,choice){
    if(choice ==1){
        connections++;
        notif[1].innerText = connections;
    }
    requests--;
    notif[0].innerText=requests;
    element.parentElement.parentElement.remove();
}

function changeName(name){
    if(name != ""){
        userName.innerText=name;
    }
}
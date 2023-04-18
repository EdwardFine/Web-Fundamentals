var hotTemps = document.querySelectorAll(".hot");
var coldTemps = document.querySelectorAll(".cold");
var unit = document.querySelector("#unit").value;

function setUnit(element){
    if(element.value != unit){
        if(element.value == "°C"){
            for(var i=0;i<hotTemps.length;i++){
                switch(i){
                    case 0:
                        hotTemps[i].innerText = "24°";
                        coldTemps[i].innerText = "18°";
                        break;
                    case 1:
                        hotTemps[i].innerText = "27°";
                        coldTemps[i].innerText = "19°";
                        break;
                    case 2:
                        hotTemps[i].innerText = "21°";
                        coldTemps[i].innerText = "16°";
                        break;
                    case 3:
                        hotTemps[i].innerText = "26°";
                        coldTemps[i].innerText = "21°";
                        break;
                }
            }
        }else{
            for(var i=0;i<hotTemps.length;i++){
                switch(i){
                    case 0:
                        hotTemps[i].innerText = "75°";
                        coldTemps[i].innerText = "65°";
                        break;
                    case 1:
                        hotTemps[i].innerText = "80°";
                        coldTemps[i].innerText = "66°";
                        break;
                    case 2:
                        hotTemps[i].innerText = "69°";
                        coldTemps[i].innerText = "61°";
                        break;
                    case 3:
                        hotTemps[i].innerText = "78°";
                        coldTemps[i].innerText = "70°";
                        break;
                }
            }
        }
        unit = element.value;
    }
}

function acceptCookie(element){
    element.parentElement.remove();
}
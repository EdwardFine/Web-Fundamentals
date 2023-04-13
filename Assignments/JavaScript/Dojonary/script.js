function logIn(element){
    if(element.innerText=="Log In"){
        element.innerText = "Log Out"
    }else{
        element.innerText = "Log In"
    }
}

function hide(element){
    element.remove();
}
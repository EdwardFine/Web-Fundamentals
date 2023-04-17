var likeCount = document.querySelectorAll(".likeCount");
var likes1 = parseInt(likeCount[0].innerText);
var likes2 = parseInt(likeCount[1].innerText);
var likes3 = parseInt(likeCount[2].innerText);


function increaseLike(button){
    switch(button){
        case 1:
            likes1++;
            likeCount[0].innerText = likes1 + " like(s)";
            break;
        case 2:
            likes2++;
            likeCount[1].innerText = likes2 + " like(s)";
            break;
        case 3:
            likes3++;
            likeCount[2].innerText = likes3 + " like(s)";
            break;
    }
}
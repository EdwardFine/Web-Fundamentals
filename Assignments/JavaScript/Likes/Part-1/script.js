var likeCount = document.querySelector(".likeCount");
var likes = parseInt(likeCount.innerText[0]);
console.log(likeCount);
console.log(likes);


function increaseLike(){
    likes++;
    likeCount.innerText = likes + " like(s)";
}
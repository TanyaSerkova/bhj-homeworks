const clicks = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");


cookie.onclick = function(){
    clicks.textContent = parseInt(clicks.textContent) + 1;
    clicks.textContent % 2 === 1 ? cookie.width = 230 : cookie.width = 200;
}
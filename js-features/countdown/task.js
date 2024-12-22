const addText = function(){
    const timer = document.getElementById("timer");
    if (timer.textContent > 0){
        timer.textContent -= 1;
    } else {
        clearInterval();
        alert("Вы победили в конкурсе!");
    }
}
setInterval(addText, 1000);


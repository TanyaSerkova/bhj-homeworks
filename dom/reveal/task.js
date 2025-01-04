const reveals = document.querySelectorAll(".reveal");


document.addEventListener('scroll', function(){
    for (const reveal of reveals){
        const revealTop = reveal.getBoundingClientRect().top;
        const revealBottom = reveal.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        if ((revealTop < viewportHeight) && (revealBottom > viewportHeight)){
            reveal.classList.add("reveal_active")
        }
    }
})

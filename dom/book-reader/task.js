const fontControls = document.querySelectorAll(".font-size");
const booksContent = document.querySelector(".book__content");

const textColorControls = document.querySelectorAll('.book__control_color a');
const backgroundControls = document.querySelectorAll(".book__control_background a");

fontControls.forEach(function(control, index){
    control.onclick = (e) => {
        e.preventDefault();
        if (!control.classList.contains('font-size_active')) {
        for (index = 0; index < fontControls.length; index++) {
            fontControls[index].classList.remove("font-size_active");
        }
        control.classList.add('font-size_active');
        if (control.classList.contains("font-size_small")){
            booksContent.classList.remove("book_fs-big")
            booksContent.classList.add("book_fs-small")
        } else if (control.classList.contains("font-size_big")){
            booksContent.classList.remove("book_fs-small")
            booksContent.classList.add("book_fs-big")
        } else if (!control.classList.contains("font-size_big") &&
                !control.classList.contains("font-size_small")){
                    booksContent.classList.remove("book_fs-small");
                    booksContent.classList.remove("book_fs-big");
                }
        }
}
})

textColorControls.forEach(function(textColorControl, index){
    textColorControl.onclick = (e) => {
        e.preventDefault();
        if (!textColorControl.classList.contains('color_active')) {
        for (index = 0; index < textColorControls.length; index++) {
            textColorControls[index].classList.remove("color_active");
        }
        textColorControl.classList.add("color_active");
            booksContent.style.color = textColorControl.getAttribute('data-text-color');
        }
}
})

backgroundControls.forEach(function(backgroundControl, index){
    backgroundControl.onclick = (e) => {
        e.preventDefault();
        if (!backgroundControl.classList.contains('color_active')) {
        for (index = 0; index < backgroundControls.length; index++) {
            backgroundControls[index].classList.remove("color_active");
        }
        backgroundControl.classList.add("color_active");
            booksContent.style.backgroundColor = backgroundControl.getAttribute('data-bg-color');
        }
}
})


const menu = document.querySelector(".dropdown__list");
const activeValue = document.querySelector(".dropdown__value");
const links = Array.from(document.querySelectorAll('.dropdown__link'));

activeValue.addEventListener('click', function() {
    menu.classList.toggle("dropdown__list_active");
})

links.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        menu.classList.remove("dropdown__list_active");
        activeValue.textContent = event.currentTarget.textContent
    })
})

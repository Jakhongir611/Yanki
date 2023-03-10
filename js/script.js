AOS.init({
    disable: false,
})

new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

let doc = document
let button_menu = doc.querySelector('.burger-menu')
let navigation_menu = doc.querySelector('.active-menu')
let top_line = doc.querySelector('.top-line')
let center_line = doc.querySelector('.center-line')
let bottom_line = doc.querySelector('.bottom-line')

button_menu.addEventListener('click', function () {
    navigation_menu.classList.toggle('active')
    button_menu.classList.toggle('fix')
    top_line.classList.toggle('rotate-top')
    center_line.classList.toggle('delete-center')
    bottom_line.classList.toggle('rotate-bottom')
})
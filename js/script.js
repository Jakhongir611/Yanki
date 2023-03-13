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

let yakar1 = doc.querySelector('.yakar1')
let yakar2 = doc.querySelector('.yakar2')
let yakar3 = doc.querySelector('.yakar3')
let yakar4 = doc.querySelector('.yakar4')

let href1 = doc.querySelector('#kotegoriya')
let href2 = doc.querySelector('#podpiska')
let href3 = doc.querySelector('#contacts')
let href4 = doc.querySelector('#onas')


yakar1.addEventListener('click',(event) => {
    event.preventDefault()
    window.scrollTo({top: href1.offsetTop - 150, behavior: 'smooth'})
})
yakar2.addEventListener('click',(event) => {
    event.preventDefault()
    window.scrollTo({top: href2.offsetTop - 150, behavior: 'smooth'})   
})
yakar3.addEventListener('click',(event) => {
    event.preventDefault()
    window.scrollTo({top: href3.offsetTop - 150, behavior: 'smooth'})   
})
yakar4.addEventListener('click',(event) => {
    event.preventDefault()
    window.scrollTo({top: href4.offsetTop - 150, behavior: 'smooth'})   
})
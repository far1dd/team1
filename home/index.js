var btn = document.querySelector('.main-1 .left button')
var joinus = document.querySelector('.joinus-logo')
var ctlg = document.querySelector('.cataloglar')
var popup = document.querySelector('.pop-up')
var popupback = document.querySelector('.pop-up-back')

var head = document.querySelector('header')


btn.addEventListener('click', () => {
    window.location.href = './catalog.html'
})

ctlg.addEventListener('click', () => {
    window.location.href = './catalog.html'
})

joinus.addEventListener('click', () => {
    popup.style.display = 'block'
    popupback.style.display = 'block'
    
})






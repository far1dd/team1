var joinus = document.querySelector('.joinus-logo')
var popup = document.querySelector('.pop-up')
var popupback = document.querySelector('.pop-up-back')
var closepop = document.querySelector('#closePopup')


joinus.addEventListener('click', () => {
    popup.style.display = 'block'
    popupback.style.display = 'block'
    
})

closepop.addEventListener('click', () => {
    popup.style.display = 'none'
    popupback.style.display = 'none'
})
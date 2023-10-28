
const inp = document.querySelector('#search-book');
const form = document.querySelector('#inp-form');
const SLIDER = document.querySelector(".swiper-wrapper");
const carusel = document.querySelector(".right-side");
const swipper = document.querySelector('.swiper');

var popup = document.querySelector('.pop-up')
var popupback = document.querySelector('.pop-up-back')
var closepop = document.querySelector('#closePopup')
var joinus = document.querySelector('.joinus-logo')
var err = document.querySelector('.nav-menu')



joinus.addEventListener('click', () => {
    popup.style.display = 'block'
    popupback.style.display = 'block'
    err.style.position = 'static'
    
})

closepop.addEventListener('click', () => {
    popup.style.display = 'none'
    popupback.style.display = 'none'
    err.style.position = 'fixed'
})




form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchValue = inp.value.trim();
    if (searchValue) {
        searchBooks(searchValue);
    } else {
        alert("input cannot be left empty");
    }
});

const swiper = new Swiper(swipper, {
    direction: "horizontal",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 800,
});

function searchBooks(query) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(result => result.json())
        .then(data => {
            const books = data.items;
            populateCarousel(books);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

function populateCarousel(books) {
    carusel.style.display = "block";
    SLIDER.innerHTML = "";

    books.forEach(book => {
        const { title, imageLinks, description, authors } = book.volumeInfo;
        const image = imageLinks?.thumbnail || 'sekil yoxdur';
        const author = authors ? authors[0] : 'muelif yoxdur';

        SLIDER.innerHTML += `
            <div class="swiper-slide">
                <div class="info-main">
                    <div class="img-container">
                        <img class="img-book" src="${image}" alt="${title}" />
                    </div>
                    <div class="description-container">
                        <h2 class="title">${title}</h2>
                        <h4 class="authors">${author}</h4>
                        <p class="description">${description || 'No desc'}</p>
                    </div>
                </div>
            </div>`;
    });
}

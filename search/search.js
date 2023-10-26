// const inp = document.querySelector('#search-book');
// const searchBtn = document.querySelector('#search-btn');
// const form = document.querySelector('#inp-form');
// const SLIDER = document.querySelector(".swiper-wrapper");
// const carusel = document.querySelector(".right-side");
// const swipper = document.querySelector('.swiper');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     if (inp.value !== "") {
//         fetch(`https://www.googleapis.com/books/v1/volumes?q=${inp.value}`)
//             .then(result => result.json())
//             .then(data => {
//                 var totaldata = data.items;
//                 carousel(totaldata);
//             })
//     } else {
//         alert("Input cannot be left blank");
//     }
// });

// // Swiper düğmelerini ekliyoruz
// const swiper = new Swiper(swipper, {
//     direction: "horizontal",
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     speed: 800,
// });

// function carousel(totaldata) {
//     carusel.style.display = "block";
//     SLIDER.innerHTML = ""; // SLIDER içeriğini temizliyoruz
//     for (let i of totaldata) {
//         const title = i.volumeInfo.title;
//         const image = i.volumeInfo.imageLinks.thumbnail;
//         const desc = i.volumeInfo.description;
//         const authors = i.volumeInfo.authors;
//         SLIDER.innerHTML += `
//         <div class="swiper-slide">
//             <div class="info-main">
//                 <div class="img-container">
//                     <img class="img-book" src="${image}" alt="" />
//                 </div>
//                 <div class="description-container">
//                     <h2 class="title">${title}</h2>
//                     <h4 class="authors">${authors ? authors[0] : 'Author not available'}</h4>
//                     <p class="description">${desc}</p>
//                 </div>
//             </div>
//         </div>`;
//     }
// }
// document.querySelector(".swiper-button-next:after").addEventListener("click", function () {
//     alert("geri")
// })



const inp = document.querySelector('#search-book');
const form = document.querySelector('#inp-form');
const SLIDER = document.querySelector(".swiper-wrapper");
const carusel = document.querySelector(".right-side");
const swipper = document.querySelector('.swiper');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchValue = inp.value.trim();
    if (searchValue) {
        searchBooks(searchValue);
    } else {
        alert("Arama yapmadan önce bir şeyler yazın.");
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
            console.error("Kitap araması sırasında bir hata oluştu: ", error);
        });
}

function populateCarousel(books) {
    carusel.style.display = "block";
    SLIDER.innerHTML = ""; // SLIDER içeriğini temizliyoruz

    books.forEach(book => {
        const { title, imageLinks, description, authors } = book.volumeInfo;
        const image = imageLinks?.thumbnail || 'Resim Yok';
        const author = authors ? authors[0] : 'Yazar Bulunamadı';

        SLIDER.innerHTML += `
            <div class="swiper-slide">
                <div class="info-main">
                    <div class="img-container">
                        <img class="img-book" src="${image}" alt="${title}" />
                    </div>
                    <div class="description-container">
                        <h2 class="title">${title}</h2>
                        <h4 class="authors">${author}</h4>
                        <p class="description">${description || 'Açıklama Yok'}</p>
                    </div>
                </div>
            </div>`;
    });
}

// Swiper'ın sonraki düğmesine tıklama olayı burada işlenir
swiper.on('click', function () {
    alert("Sonraki kitaba geçildi");
});

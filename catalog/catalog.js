
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    speed: 800,
    slidesPerView: 5,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        375: {
            slidesPerView: 1,
        },
        558: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 5,
        },
    },
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
    getDatabase,
    ref,
    get,
    set,
    onValue,
    child,
    push,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCNtYmr6w74V6EI4IdfDK-4706tmJh7NQ8",
    authDomain: "bookstore-7b3f2.firebaseapp.com",
    databaseURL:
    "https://bookstore-7b3f2-default-rtdb.firebaseio.com",
    projectId:  "bookstore-7b3f2",
    storageBucket:"bookstore-7b3f2.appspot.com",
    messagingSenderId:  "727763460980",
    appId:  "1:727763460980:web:40d144ac7f460d8baec221"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const bookDataRef = ref(db, `/bookData`);
const allBooksContainer = document.querySelector(".wrapper-allbooks");
const bestsellersContainer = document.querySelector(".wrapper-bestsellers");
const newReleaseContainer = document.querySelector(".wrapper-newReleases");
const allBooks = [];
const fictionBooks = [];
const philosophyBooks = [];
const biographyBooks = [];
const dramaBooks = [];

onValue(bookDataRef, (snapshot) => {
    const bookDatas = snapshot.val();

    for (const key in bookDatas) {
        allBooks.push(bookDatas[key]);
        const swiperSlideContainerForAllBooks = document.createElement("div");
        swiperSlideContainerForAllBooks.classList.add("swiper-slide");
        swiperSlideContainerForAllBooks.classList.add(
            "slide-contect-container"
        );
        swiperSlideContainerForAllBooks.classList.add("all-books-container");
        swiperSlideContainerForAllBooks.innerHTML = `
            <div class='book-img-container'>
                <img src="${bookDatas[key].image}" />
                <h4>${bookDatas[key].name}</h4>
                <p>${bookDatas[key].author}</p>
                <div class="btn-container">
                <button id="bookButton_${bookDatas[key].id}">Read more</button>
                </div>
            </div>
        `;

        allBooksContainer.append(swiperSlideContainerForAllBooks);

        if (bookDatas[key].saleInfo > 15) {
            const swiperSlideContainer = document.createElement("div");
            swiperSlideContainer.classList.add("swiper-slide");
            swiperSlideContainer.classList.add("slide-contect-container");
            swiperSlideContainer.innerHTML = `
            <div class='book-img-container'>
                <img src="${bookDatas[key].image}" />
                <h4>${bookDatas[key].name}</h4>
                <p>${bookDatas[key].author}</p>
                <div class="btn-container">
                <button id="bookButton_${bookDatas[key].id}">Read more</button>
                </div>
            </div>
        `;

            bestsellersContainer.append(swiperSlideContainer);
        }

        if (bookDatas[key].publishedDate > "2015-01-01") {
            const swiperSlideContainer = document.createElement("div");
            swiperSlideContainer.classList.add("swiper-slide");
            swiperSlideContainer.classList.add("slide-contect-container");
            swiperSlideContainer.innerHTML = `
            <div class='book-img-container'>
                <img src="${bookDatas[key].image}" />
                <h4>${bookDatas[key].name}</h4>
                <p>${bookDatas[key].author}</p>
                <div class="btn-container">
                <button id="bookButton_${bookDatas[key].id}">Read more</button>
                </div>
            </div>
        `;
            newReleaseContainer.append(swiperSlideContainer);
        }

        if (bookDatas[key].type === "Fiction") {
            fictionBooks.push(bookDatas[key]);
        } else if (bookDatas[key].type === "Biography & Autobiography") {
            biographyBooks.push(bookDatas[key]);
        } else if (bookDatas[key].type === "Drama") {
            dramaBooks.push(bookDatas[key]);
        } else if (bookDatas[key].type === "Philosophy") {
            philosophyBooks.push(bookDatas[key]);
        }
        const buttons = document.querySelectorAll(
            `#bookButton_${bookDatas[key].id}`
        );
        buttons.forEach((element) => {
            element.addEventListener("click", () => {
                window.location.href = "/aboutBook/aboutBook.html";
                window.localStorage.setItem("bookName", bookDatas[key].name);
                window.localStorage.setItem(
                    "bookDescription",
                    bookDatas[key].description
                );
                window.localStorage.setItem(
                    "bookAuthor",
                    bookDatas[key].author
                );
                window.localStorage.setItem("bookImage", bookDatas[key].image);
                window.localStorage.setItem(
                    "bookPublishedData",
                    bookDatas[key].publishedDate.slice(0, 4)
                );
            });
        });
    }
});
document.getElementById("all-books").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < allBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `
            <div class='book-img-container'>
            <img src="${allBooks[i].image}" />
            <h4>${allBooks[i].name}</h4>
            <p>${allBooks[i].author}</p>
            <div class="btn-container">
                <button id="bookButton_${allBooks[i].id}">Read more</button>
            </div>
        </div>
    
        `;

        allBooksContainer.append(swiperSlide);
        const allBooksID = document.querySelectorAll(
            `#bookButton_${allBooks[i].id}`
        );
        allBooksID.forEach((element) => {
            console.log("test");
            element.addEventListener("click", () => {
                window.location.href = "/aboutBook/aboutBook.html";
                window.localStorage.setItem("bookName", allBooks[i].name);
                window.localStorage.setItem(
                    "bookDescription",
                    allBooks[i].description
                );
                window.localStorage.setItem("bookAuthor", allBooks[i].author);
                window.localStorage.setItem("bookImage", allBooks[i].image);
                window.localStorage.setItem(
                    "bookPublishedData",
                    allBooks[i].publishedDate.slice(0, 4)
                );
            });
        });
    }
});

document.querySelector("#fiction").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < fictionBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `   
            <div class='book-img-container'>
            <img src="${fictionBooks[i].image}" />
            <h4>${fictionBooks[i].name}</h4>
            <p>${fictionBooks[i].author}</p>
            <div class="btn-container">
                <button id="bookButton_${fictionBooks[i].id}">Read more</button>
            </div>
        </div>
    
        `;
        allBooksContainer.append(swiperSlide);
        const fictionBooksID = document.querySelectorAll(
            `#bookButton_${fictionBooks[i].id}`
        );
        fictionBooksID.forEach((element) => {
            element.addEventListener("click", () => {
                window.location.href = "/aboutBook/aboutBook.html";
                window.localStorage.setItem("bookName", fictionBooks[i].name);
                window.localStorage.setItem(
                    "bookDescription",
                    fictionBooks[i].description
                );
                window.localStorage.setItem(
                    "bookAuthor",
                    fictionBooks[i].author
                );
                window.localStorage.setItem("bookImage", fictionBooks[i].image);
                window.localStorage.setItem(
                    "bookPublishedData",
                    fictionBooks[i].publishedDate.slice(0, 4)
                );
            });
        });
    }
});

document.querySelector("#philosophy").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < philosophyBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `   
            <div class='book-img-container'>
            <img src="${philosophyBooks[i].image}" />
            <h4>${philosophyBooks[i].name}</h4>
            <p>${philosophyBooks[i].author}</p>
            <div class="btn-container">
            <button id="bookButton_${philosophyBooks[i].id}">Read more</button>
            </div>
        </div>
    
        `;
        allBooksContainer.append(swiperSlide);

        const philosophyBooksID = document.querySelectorAll(
            `#bookButton_${philosophyBooks[i].id}`
        );
        philosophyBooksID.forEach((element) => {
            element.addEventListener("click", () => {
                window.location.href = "/aboutBook/aboutBook.html";
                window.localStorage.setItem(
                    "bookName",
                    philosophyBooks[i].name
                );
                window.localStorage.setItem(
                    "bookDescription",
                    philosophyBooks[i].description
                );
                window.localStorage.setItem(
                    "bookAuthor",
                    philosophyBooks[i].author
                );
                window.localStorage.setItem(
                    "bookImage",
                    philosophyBooks[i].image
                );
                window.localStorage.setItem(
                    "bookPublishedData",
                    philosophyBooks[i].publishedDate.slice(0, 4)
                );
            });
        });
    }
});

document.getElementById("drama").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < dramaBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `
            <div class='book-img-container'>
            <img src="${dramaBooks[i].image}" />
            <h4>${dramaBooks[i].name}</h4>
            <p>${dramaBooks[i].author}</p>
            <div class="btn-container">
            <button id="bookButton_${dramaBooks[i].id}">Read more</button>
            </div>
        </div>
    
        `;
        allBooksContainer.append(swiperSlide);
        const dramaBooksID = document.querySelectorAll(
            `#bookButton_${dramaBooks[i].id}`
        );
        dramaBooksID.forEach((element) => {
            element.addEventListener("click", () => {
                window.location.href = "/aboutBook/aboutBook.html";
                window.localStorage.setItem("bookName", dramaBooks[i].name);
                window.localStorage.setItem(
                    "bookDescription",
                    dramaBooks[i].description
                );
                window.localStorage.setItem("bookAuthor", dramaBooks[i].author);
                window.localStorage.setItem("bookImage", dramaBooks[i].image);
                window.localStorage.setItem(
                    "bookPublishedData",
                    dramaBooks[i].publishedDate.slice(0, 4)
                );
            });
        });
    }
});
document.getElementById("biography").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < biographyBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `
            <div class='book-img-container'>
            <img src="${biographyBooks[i].image}" />
            <h4>${biographyBooks[i].name}</h4>
            <p>${biographyBooks[i].author}</p>
            <div class="btn-container">
            <button id="bookButton_${biographyBooks[i].id}">Read more</button>
            </div>
        </div>
    
        `;
        allBooksContainer.append(swiperSlide);

        const biographyBooksID = document.querySelectorAll(
            `#bookButton_${biographyBooks[i].id}`
        );
        biographyBooksID.forEach((element) => {
            element.addEventListener("click", () => {
                window.location.href = "/aboutBook/aboutBook.html";
                window.localStorage.setItem("bookName", biographyBooks[i].name);
                window.localStorage.setItem(
                    "bookDescription",
                    biographyBooks[i].description
                );
                window.localStorage.setItem(
                    "bookAuthor",
                    biographyBooks[i].author
                );
                window.localStorage.setItem(
                    "bookImage",
                    biographyBooks[i].image
                );
                window.localStorage.setItem(
                    "bookPublishedData",
                    biographyBooks[i].publishedDate.slice(0, 4)
                );
            });
        });
    }
});


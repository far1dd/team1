let bookName = window.localStorage.getItem("bookName");
let bookAuthor = window.localStorage.getItem("bookAuthor");
let bookImage = window.localStorage.getItem("bookImage");
let bookPublishedDate = window.localStorage.getItem("bookPublishedData");
let bookDescription = window.localStorage.getItem("bookDescription");
const mainRight = document.querySelector(".main-section-right");
const mainLeft = document.querySelector(".main-section-left");

const dateofBook = document.getElementById("bookPublishedDate");
dateofBook.textContent = bookPublishedDate;
const nameOfBook = document.getElementById("bookName");
nameOfBook.textContent = bookName;
const authorOfBook = document.getElementById("bookAuthor");
authorOfBook.textContent = bookAuthor;
const descriptionOfBook = document.getElementById("bookDescription");
descriptionOfBook.textContent = bookDescription;
const imageOfBook = document.getElementById("bookImage");
imageOfBook.setAttribute("src", bookImage);
document.getElementById("goBackBtn").addEventListener("click", () => {
    window.location.href = "../catalog.html";
});

const hamburger = document.getElementById("checkbox");
hamburger.addEventListener("click", () => {
    if (hamburger.checked) {
        mainRight.style.zIndex = "-1";
        mainLeft.style.zIndex = "-1";
    } else {
        mainRight.style.zIndex = "0";
        mainLeft.style.zIndex = "-1";
    }
});

// import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
// import { db } from './firebase.js';
// const booksRef = ref(db, `/book`);
// const booksList = document.querySelector(".bookForm-cont")
// onValue(booksRef, (snapshot) => {
//     booksList.innerHTML = ""; 

//     const bookData = snapshot.val();
//     const bookName = bookData.bookName;
//     const authorName = bookData.authorName;
//     const imgUrl = bookData.imgUrl;
//     const description = bookData.description;
//     const bookType = bookData.bookType;


//     booksList.innerHTML = `
//         <div>
//         <h2 class="Basliq">${bookName}</h2>
//         <p>${authorName}
//         </p>
//     </div>
//      <div>
//         <img src="${imgUrl}" alt="">
//     </div>
//     <div><p>${description}
    
//     </p></div>
//     <div><p>${bookType}

//             `;

// });
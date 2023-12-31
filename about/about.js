
import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './firebase.js';
// document.addEventListener("DOMContentLoaded", () => {
const booksRef = ref(db, `/about`);
const booksList = document.querySelector(".Aboutstore-container")
onValue(booksRef, (snapshot) => {
    booksList.innerHTML = ""; // Clear the previous content

    // forEachChild(snapshot, (childSnapshot) => {
    const bookData = snapshot.val();
    const title = bookData.title;
    const bookimg = bookData.bookimg;
    const descrp = bookData.descrp;

    // Create HTML elements to display the book data
    booksList.innerHTML = `
        <div>
        <h2 class="Basliq">${title}</h2>
        <p>${descrp}
        </p>
    </div>
     <div>
        <img src="${bookimg}" alt="">
    </div>

            `;


    // Display the title in an alert
    console.log(bookData)
});
// });
// });
var popup = document.querySelector('.pop-up')
var popupback = document.querySelector('.pop-up-back')
var closepop = document.querySelector('#closePopup')
var joinus = document.querySelector('.joinus-logo')

joinus.addEventListener('click', () => {
    popup.style.display = 'block'
    popupback.style.display = 'block'
    
})

closepop.addEventListener('click', () => {
    popup.style.display = 'none'
    popupback.style.display = 'none'
})
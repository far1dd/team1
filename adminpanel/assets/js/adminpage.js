// Import the necessary Firebase libraries
import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from "./firebase.js";

document.querySelector(".aboutbutton").addEventListener("click", function () {
    function titleyolla(melumat) {
        const x = ref(db, '/about/title')
        set(x, melumat)

    }

    titleyolla(document.querySelector("#AboutUs").value)

    function bookimage(melumat) {
        const x = ref(db, '/about/bookimg')
        set(x, melumat)

    }

    bookimage(document.querySelector("#Bookimage").value)

    function description(melumat) {
        const x = ref(db, '/about/descrp')
        set(x, melumat)

    }

    description(document.querySelector("#description").value)
}

)



const booksRef = ref(db, `/joinus`);
const tableBody = document.querySelector('#join-tbody')
onValue(booksRef, (snapshot) => {

    const bookData = snapshot.val();
    const address = bookData.title;
    const email = bookData.email;


    // const table = document.createElement('table')
    tableBody.innerHTML = `
    <tr>
        <th>1   </th>
        <th>${address}</th>
        <th>${email}</th>
    </tr>
`
    // tableBody.append(table)    
    //     <table>
    // </table>


});


onValue(booksRef, (snapshot) => {

    const bookData = snapshot.val();
    const address = bookData.title;
    const email = bookData.email;


    // const table = document.createElement('table')
    tableBody.innerHTML = `
    <tr>
        <th>1   </th>
        <th>${address}</th>
        <th>${email}</th>
    </tr>
`
    // tableBody.append(table)    
    //     <table>
    // </table>


});


const booksRef2 = ref(db, `/budaq1`);
const tableBody2 = document.querySelector('#tbody')
onValue(booksRef2, (snapshot2) => {
    const bookData = snapshot2.val();
    const address = bookData.Address;
    const email = bookData.Email;
    const fullname = bookData.FullName;
    const number = bookData.Number


    // const table = document.createElement('table')
    tableBody2.innerHTML = `
    <tr>
        <th>1   </th>
        <th>${fullname}</th>
        <th>${address}</th>
        <th>${email}</th>
        <th>${number}</th>

        
    </tr>
`
    // tableBody.append(table)    
    //     <table>
    // </table>


});


onValue(booksRef2, (snapshot2) => {

    const bookData = snapshot2.val();
    const address = bookData.Address;
    const email = bookData.Email;
    const fullname = bookData.FullName;
    const number = bookData.Number

    // const table = document.createElement('table')
    tableBody2.innerHTML = `
    <tr>
        <th>1   </th>
        <th>${fullname}</th>
        <th>${address}</th>
        <th>${email}</th>
        <th>${number}</th>
        
    </tr>
`
    // tableBody.append(table)    
    //     <table>
    // </table>


});




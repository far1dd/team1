// Import the necessary Firebase libraries
import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from "firebase.js";

var button = document.querySelector(".join-button")
var input2 = document.querySelector(".email")
var input1 = document.querySelector(".fullname")
button.addEventListener("click", function () {
    function emailyolla(melumat) {
        const x = ref(db, '/joinus/email')
        set(x, melumat)

    }

    emailyolla(input2.value)

    function fullnameyolla(melumat) {
        const x = ref(db, '/joinus/title')
        set(x, melumat)

    }

    fullnameyolla(input1.value)




}

)



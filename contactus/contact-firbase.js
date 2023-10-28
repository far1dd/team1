import { ref, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './firebase.js'

document.querySelector(".contactusSendinfo").addEventListener("click", function () {
    function FullName(melumat) {
        const x = ref(db, '/budaq1/FullName')
        set(x, melumat)
    }
    FullName(document.querySelector("#FullName").value)

    function Email(melumat) {
        const x = ref(db, '/budaq1/Email')
        set(x, melumat)
    }
    Email(document.querySelector("#Email").value)


    function Address(melumat) {
        const x = ref(db, '/budaq1/Address')
        set(x, melumat)
    }
    Address(document.querySelector("#Address").value)


    function Number(melumat) {
        const x = ref(db, '/budaq1/Number')
        set(x, melumat)
    }

    Number(document.querySelector("#Number").value)

    function text(melumat) {
        const x = ref(db, '/budaq1/TextArea')
        set(x, melumat)
    }
    text(document.querySelector("#textarea").value)


})

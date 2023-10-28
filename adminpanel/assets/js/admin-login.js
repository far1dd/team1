document.querySelector('button').addEventListener('click', function () {
    var enteredUsername = document.querySelector('.username').value;
    var enteredPassword = document.querySelector('.password').value;
    var input2 = document.querySelector('.username');
    var input1 = document.querySelector('.password');
    var gizlip = document.querySelector(".p-gizli");
    
    localStorage.setItem("Ad1", "Ehed123");
    localStorage.setItem("Kod1", "Ehed123");

    if (enteredUsername === localStorage.getItem("Ad1") && enteredPassword === localStorage.getItem("Kod1")) {
        window.location.href = '/adminpanel/adminpanel.html';
        gizlip.style.display = "none";
        input1.style.border = '2px solid green';
        input2.style.border = '2px solid green';
        document.querySelector('button').style.marginTop = "4.5px";
        
    } else {
        input1.style.border = '2px solid red';
        input2.style.border = '2px solid red';
        gizlip.style.display = "block";
        document.querySelector('button').style.marginTop = "4.5px";
    }
});

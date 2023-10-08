let btnName = document.getElementById('btnNombre');
let userName = document.getElementById('userName');

let inputName

btnName.addEventListener("click", function () {

    inputName = userName.value.toUpperCase();

    if (inputName.trim() !== "") {
        localStorage.setItem("name", inputName);
        window.location.href = "color.html"

    } else {
        alert("Please insert a name.");
    }
});




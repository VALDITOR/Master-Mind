let btnName = document.getElementById('btnNombre');
let userName = document.getElementById('userName');

let inputName

btnName.addEventListener("click", function() {

    inputName = userName.value;
  
    if (inputName.trim() !== "") {
        localStorage.setItem("Valor", inputName);

    }else {
        alert("Por favor, ingrese un valor antes de guardar en el Local Storage.");
    }
  });



 
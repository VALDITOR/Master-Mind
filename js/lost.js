let nameWL = localStorage.getItem('name');

// Verifica si el valor existe en el localStorage
if (nameWL !== null) {
    // Si existe, muestra el valor en el div
    let nameWinLost = document.getElementById('nameWinLost');
    nameWinLost.textContent = 'HAS PERDIDO ' + nameWL;
}
let nameWL = localStorage.getItem('name');

if (nameWL !== null) {
    let nameWinLost = document.getElementById('nameWinLost');
    nameWinLost.textContent = 'HAS PERDIDO ' + nameWL;
}
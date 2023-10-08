let nameWL = localStorage.getItem('name');
let arrayColor0 = localStorage.getItem('saveCode0');
let arrayColor1 = localStorage.getItem('saveCode1');
let arrayColor2 = localStorage.getItem('saveCode2');
let arrayColor3 = localStorage.getItem('saveCode3');
let colorWin0 = document.getElementById('colorWin0')
let colorWin1 = document.getElementById('colorWin1')
let colorWin2 = document.getElementById('colorWin2')
let colorWin3 = document.getElementById('colorWin3')

if (nameWL !== null) {
    let nameWinLost = document.getElementById('nameWinLost');
    nameWinLost.textContent = 'YOU WIN ' + nameWL;
}

const color0 = arrayColor0.slice(1, -1);
colorWin0.style.backgroundColor = color0;

const color1 = arrayColor1.slice(1, -1);
colorWin1.style.backgroundColor = color1;

const color2 = arrayColor2.slice(1, -1);
colorWin2.style.backgroundColor = color2;

const color3 = arrayColor3.slice(1, -1);
colorWin3.style.backgroundColor = color3;
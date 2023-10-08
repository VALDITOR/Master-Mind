let nameWL = localStorage.getItem('name');
let arrayColor0 = localStorage.getItem('saveCode0');
let arrayColor1 = localStorage.getItem('saveCode1');
let arrayColor2 = localStorage.getItem('saveCode2');
let arrayColor3 = localStorage.getItem('saveCode3');
let colorLose0 = document.getElementById('colorLose0')
let colorLose1 = document.getElementById('colorLose1')
let colorLose2 = document.getElementById('colorLose2')
let colorLose3 = document.getElementById('colorLose3')

if (nameWL !== null) {
    let nameWinLost = document.getElementById('nameWinLost');
    nameWinLost.textContent = 'YOU LOSE ' + nameWL;
}

const color0 = arrayColor0.slice(1, -1);
colorLose0.style.backgroundColor = color0;

const color1 = arrayColor1.slice(1, -1);
colorLose1.style.backgroundColor = color1;

const color2 = arrayColor2.slice(1, -1);
colorLose2.style.backgroundColor = color2;

const color3 = arrayColor3.slice(1, -1);
colorLose3.style.backgroundColor = color3;
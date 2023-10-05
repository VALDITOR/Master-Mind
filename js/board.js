let firstColor = document.getElementById('firstColor');
let secondColor = document.getElementById('secondColor');
let thirdColor = document.getElementById('thirdColor');
let fourthColor = document.getElementById('fourthColor');
let check = document.getElementById('check');
let cells = document.querySelectorAll('cell');
let row0 = document.getElementById('row0');
let row1 = document.getElementById('row1');
let cell0 = document.getElementById('cell0');
let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let arrayRow = [row0[cell0, cell1, cell2, cell3], row1[cell4, cell5, cell6, cell7]];
let currentColor = " ";
let count = 0;
let color1 = localStorage.getItem('color1');
let color2 = localStorage.getItem('color2');
let color3 = localStorage.getItem('color3');
let color4 = localStorage.getItem('color4');
let colors = [color1, color2, color3, color4];
let yourColors = []
console.log(colors);

firstColor.style.backgroundColor = color1
secondColor.style.backgroundColor = color2
thirdColor.style.backgroundColor = color3
fourthColor.style.backgroundColor = color4


//Generar codigo de colores aleatorio
let code = [
    colors[Math.floor(Math.random() * 4)],
    colors[Math.floor(Math.random() * 4)],
    colors[Math.floor(Math.random() * 4)],
    colors[Math.floor(Math.random() * 4)]
];

console.log(code);

//Seleccionar colores
 
firstColor.addEventListener('click', (e) => {
    currentColor = colors[0];
})

secondColor.addEventListener('click', (e) => {
    currentColor = colors[1];
})

thirdColor.addEventListener('click', (e) => {
    currentColor = colors[2];
})

fourthColor.addEventListener('click', (e) => {
    currentColor = colors[3];

})

//Pintar casillas
if(count === 0){
    cell0.addEventListener('click', (e)=>{
        cell0.style.backgroundColor = currentColor;
        yourColors[0] = cell0.style.backgroundColor;
    })
    cell1.addEventListener('click', (e)=>{
        cell1.style.backgroundColor = currentColor;
        yourColors[1] = cell0.style.backgroundColor;
    })
    cell2.addEventListener('click', (e)=>{
        cell2.style.backgroundColor = currentColor;
        yourColors[2] = cell0.style.backgroundColor;
    })
    cell3.addEventListener('click', (e)=>{
        cell3.style.backgroundColor = currentColor;
        yourColors[3] = cell0.style.backgroundColor;
    })
}
check.addEventListener('click', (e)=>{
    count++
if(count === 1){
    cell4.addEventListener('click', (e)=>{
        cell4.style.backgroundColor = currentColor;
        yourColors[0] = cell0.style.backgroundColor;
    })
    cell5.addEventListener('click', (e)=>{
        cell5.style.backgroundColor = currentColor;
        yourColors[1] = cell0.style.backgroundColor;
    })
    cell6.addEventListener('click', (e)=>{
        cell6.style.backgroundColor = currentColor;
        yourColors[2] = cell0.style.backgroundColor;
    })
    cell7.addEventListener('click', (e)=>{
        cell7.style.backgroundColor = currentColor;
        yourColors[3] = cell0.style.backgroundColor;
    })
}
});




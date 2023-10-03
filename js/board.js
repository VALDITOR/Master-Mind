let firstColor = document.getElementById('firstColor');
let secondColor = document.getElementById('secondColor');
let thirdColor = document.getElementById('thirdColor');
let fourthColor = document.getElementById('fourthColor');
let check = document.getElementById('check')
let cell = document.getElementsByClassName("cell");
let currentColor = " ";
let count = 3
let color1 = localStorage.getItem('color1');
let color2 = localStorage.getItem('color2');
let color3 = localStorage.getItem('color3');
let color4 = localStorage.getItem('color4');
let colors = [color1, color2, color3, color4];
console.log(colors);

firstColor.style.backgroundColor = color1
secondColor.style.backgroundColor = color2
thirdColor.style.backgroundColor = color3
fourthColor.style.backgroundColor = color4


//Generar codigo de colores aleatorio
let code = [
    colors[Math.floor(Math.random()*4)], 
    colors[Math.floor(Math.random()*4)],
    colors[Math.floor(Math.random()*4)],
    colors[Math.floor(Math.random()*4)]
];

console.log(code);

//Seleccionar colores

firstColor.addEventListener('click', (e) =>{
    currentColor = colors[0];
})

secondColor.addEventListener('click', (e) =>{
    currentColor = colors[1];
})

thirdColor.addEventListener('click', (e) =>{
    currentColor = colors[2];
})

fourthColor.addEventListener('click', (e) =>{
    currentColor = colors[3];

})

//Pintar casillas

for(let i = 0; i <= 3; i++){
cell[i].addEventListener('click', (e) =>{
    cell[i].style.backgroundColor = currentColor;
})
}








    



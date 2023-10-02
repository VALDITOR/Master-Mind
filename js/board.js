let firstColor = document.getElementById('firstColor');
let secondColor = document.getElementById('secondColor');
let thirdColor = document.getElementById('thirdColor');
let fourthColor = document.getElementById('fourthColor');
let check = document.getElementById('check')
let cell = document.getElementsByClassName("cell");
let currentColor = " ";
let codeColors = ["green","blue","red","purple"];
let count = 3

//Generar codigo de colores aleatorio
let code = [
    codeColors[Math.floor(Math.random()*4)], 
    codeColors[Math.floor(Math.random()*4)],
    codeColors[Math.floor(Math.random()*4)],
    codeColors[Math.floor(Math.random()*4)]
];

//Seleccionar colores

firstColor.addEventListener('click', (e) =>{
    currentColor = codeColors[0];
})

secondColor.addEventListener('click', (e) =>{
    currentColor = codeColors[1];
})

thirdColor.addEventListener('click', (e) =>{
    currentColor = codeColors[2];
})

fourthColor.addEventListener('click', (e) =>{
    currentColor = codeColors[3];

})

//Pintar casillas

for(let i = 0; i <= 3; i++){
cell[i].addEventListener('click', (e) =>{
    cell[i].style.backgroundColor = currentColor;
})
}
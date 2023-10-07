let firstColor = document.getElementById('firstColor');
let secondColor = document.getElementById('secondColor');
let thirdColor = document.getElementById('thirdColor');
let fourthColor = document.getElementById('fourthColor');
let check = document.getElementById('check');
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
let check0 = document.getElementById('check0');
let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');
let currentColor = " ";
let count = 0;
let color1 = localStorage.getItem('color1');
let color2 = localStorage.getItem('color2');
let color3 = localStorage.getItem('color3');
let color4 = localStorage.getItem('color4');
let colors = [color1, color2, color3, color4];
let yourColors = ["red", "red", "red", "red"];
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

//Pasar colores de rgb a hexadecimal

function rgbToHex(rgb) {
    let rgbValores = rgb.match(/\d+/g);
    let coloresHex = "#";
    for (let i = 0; i < 3; i++) {
        let valorHex = parseInt(rgbValores[i]).toString(16);
        coloresHex += valorHex.length === 1 ? "0" + valorHex : valorHex;
    }
    return coloresHex

}


//Comparacion para ganar

function win(colors, yourColors) {
    let sCode = colors.toString();
    let sColors = yourColors.toString();
    rgbToHex(sColors)
    console.log(rgbToHex(sColors));
    // Verificar si los dos arrays tienen la misma longitud
    if (sCode.length !== sColors.length) {
        console.log(sCode);
        console.log(sColors);
        return; // No hacer nada si los tamaños no coinciden
    }

    // Verificar si cada elemento en los dos arrays es igual
    for (let i = 0; i < sCode.length; i++) {
        if (sCode[i] !== sColors[i]) {
            console.log('entra')
            return; // No hacer nada si algún elemento es diferente

        }
    }

    // Si llegamos aquí, los arrays son iguales, así que redirigimos a otra página
    window.location.href = '../pages/win.html';
}

//Condicion perder

function loser() {
    if (count === 10) {
        window.location.href = '../pages/loser.html'
    }
}


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
if (count === 0) {
    cell0.addEventListener('click', (e) => {
        cell0.style.backgroundColor = currentColor;
        yourColors[0] = cell0.style.backgroundColor;
    })
    cell1.addEventListener('click', (e) => {
        cell1.style.backgroundColor = currentColor;
        yourColors[1] = cell1.style.backgroundColor;
    })
    cell2.addEventListener('click', (e) => {
        cell2.style.backgroundColor = currentColor;
        yourColors[2] = cell2.style.backgroundColor;
    })
    cell3.addEventListener('click', (e) => {
        cell3.style.backgroundColor = currentColor;
        yourColors[3] = cell3.style.backgroundColor;
    })
}
check.addEventListener('click', (e) => {
    yourColors[0] = rgbToHex(yourColors[0]);
    yourColors[1] = rgbToHex(yourColors[1]);
    yourColors[2] = rgbToHex(yourColors[2]);
    yourColors[3] = rgbToHex(yourColors[3]);
    if (yourColors[0] === code[1] || yourColors[0] === code[2] || yourColors[0] === code[3]) {
        check0.style.backgroundColor = "black";
    }
    if (yourColors[1] === code[0] || yourColors[1] === code[2] || yourColors[1] === code[3]) {
        check1.style.backgroundColor = "black";
    }
    if (yourColors[2] === code[0] || yourColors[2] === code[1] || yourColors[2] === code[3]) {
        check2.style.backgroundColor = "black";
    }
    if (yourColors[3] === code[0] || yourColors[3] === code[2] || yourColors[3] === code[2]) {
        check3.style.backgroundColor = "black";
    }

    if (yourColors[0] === code[0]) {
        check0.style.backgroundColor = "purple";
    }
    if (yourColors[1] === code[1]) {
        check1.style.backgroundColor = "purple";
    }
    if (yourColors[2] === code[2]) {
        check2.style.backgroundColor = "purple";
    }
    if (yourColors[3] === code[3]) {
        check3.style.backgroundColor = "purple";
    }



    win(colors, yourColors)
    count++
    if (count === 1) {
        cell4.addEventListener('click', (e) => {
            cell4.style.backgroundColor = currentColor;
            yourColors[0] = cell4.style.backgroundColor;
        })
        cell5.addEventListener('click', (e) => {
            cell5.style.backgroundColor = currentColor;
            yourColors[1] = cell5.style.backgroundColor;
        })
        cell6.addEventListener('click', (e) => {
            cell6.style.backgroundColor = currentColor;
            yourColors[2] = cell6.style.backgroundColor;
        })
        cell7.addEventListener('click', (e) => {
            cell7.style.backgroundColor = currentColor;
            yourColors[3] = cell7.style.backgroundColor;
        })
    }
});




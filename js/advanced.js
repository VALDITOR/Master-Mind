let firstColor = document.getElementById('firstColor');
let secondColor = document.getElementById('secondColor');
let thirdColor = document.getElementById('thirdColor');
let fourthColor = document.getElementById('fourthColor');
let check = document.getElementById('check');
let cell0 = document.getElementById('cell0');
let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');
let cell10 = document.getElementById('cell10');
let cell11 = document.getElementById('cell11');
let cell12 = document.getElementById('cell12');
let cell13 = document.getElementById('cell13');
let cell14 = document.getElementById('cell14');
let cell15 = document.getElementById('cell15');
let cell16 = document.getElementById('cell16');
let cell17 = document.getElementById('cell17');
let cell18 = document.getElementById('cell18');
let cell19 = document.getElementById('cell19');
let cell20 = document.getElementById('cell20');
let cell21 = document.getElementById('cell21');
let cell22 = document.getElementById('cell22');
let cell23 = document.getElementById('cell23');
let cell24 = document.getElementById('cell24');
let cell25 = document.getElementById('cell25');
let cell26 = document.getElementById('cell26');
let cell27 = document.getElementById('cell27');
let check0 = document.getElementById('check0');
let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');
let check4 = document.getElementById('check4');
let check5 = document.getElementById('check5');
let check6 = document.getElementById('check6');
let check7 = document.getElementById('check7');
let check8 = document.getElementById('check8');
let check9 = document.getElementById('check9');
let check10 = document.getElementById('check10');
let check11 = document.getElementById('check11');
let check12 = document.getElementById('check12');
let check13 = document.getElementById('check13');
let check14 = document.getElementById('check14');
let check15 = document.getElementById('check15');
let check16 = document.getElementById('check16');
let check17 = document.getElementById('check17');
let check18 = document.getElementById('check18');
let check19 = document.getElementById('check19');
let check20 = document.getElementById('check20');
let check21 = document.getElementById('check21');
let check22 = document.getElementById('check22');
let check23 = document.getElementById('check23');
let check24 = document.getElementById('check24');
let check25 = document.getElementById('check25');
let check26 = document.getElementById('check26');
let check27 = document.getElementById('check27');
let currentColor = " ";
let count = 0;
let countCheck = 0;
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

let code0 = code[0];
let code1 = code[1];
let code2 = code[2];
let code3 = code[3];
console.log(code);

//Guardar Code En el local storage

const codeJSON0 = JSON.stringify(code[0]);
localStorage.setItem("saveCode0", codeJSON0);

const codeJSON1 = JSON.stringify(code[1]);
localStorage.setItem("saveCode1", codeJSON1);

const codeJSON2 = JSON.stringify(code[2]);
localStorage.setItem("saveCode2", codeJSON2);

const codeJSON3 = JSON.stringify(code[3]);
localStorage.setItem("saveCode3", codeJSON3);


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

function win(code, yourColors) {
    let newCode = [code0, code1, code2, code3];
    console.log(newCode);
    let sCode = newCode.toString();
    let sColors = yourColors.toString();
    rgbToHex(sColors)
    console.log(sCode);
    console.log(sColors);
    // Verificar si los dos arrays tienen la misma longitud
    if (sCode.length !== sColors.length) {
        return; // No hacer nada si los tamaños no coinciden
    }
    // Verificar si cada elemento en los dos arrays es igual
    for (let i = 0; i < sCode.length; i++) {
        if (sCode !== sColors) {
            console.log(sCode);
            console.log(sColors);
            return; // No hacer nada si algún elemento es diferente

        }
    }

    // Si llegamos aquí, los arrays son iguales, así que redirigimos a otra página
    window.location.href = '../pages/win.html';
}

//Condicion perder

function loser() {
    if (count === 6) {
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
//fila 2
check.addEventListener('click', (e) => {
    countCheck++;
    count++
    setTimeout(loser, 100)
    if (countCheck === 1) {
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
    }
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
    if (countCheck === 2) {
        yourColors[0] = rgbToHex(yourColors[0]);
        yourColors[1] = rgbToHex(yourColors[1]);
        yourColors[2] = rgbToHex(yourColors[2]);
        yourColors[3] = rgbToHex(yourColors[3]);
        if (yourColors[0] === code[1] || yourColors[0] === code[2] || yourColors[0] === code[3]) {
            check4.style.backgroundColor = "black";
        }
        if (yourColors[1] === code[0] || yourColors[1] === code[2] || yourColors[1] === code[3]) {
            check5.style.backgroundColor = "black";
        }
        if (yourColors[2] === code[0] || yourColors[2] === code[1] || yourColors[2] === code[3]) {
            check6.style.backgroundColor = "black";
        }
        if (yourColors[3] === code[0] || yourColors[3] === code[2] || yourColors[3] === code[2]) {
            check7.style.backgroundColor = "black";
        }

        if (yourColors[0] === code[0]) {
            check4.style.backgroundColor = "purple";
        }
        if (yourColors[1] === code[1]) {
            check5.style.backgroundColor = "purple";
        }
        if (yourColors[2] === code[2]) {
            check6.style.backgroundColor = "purple";
        }
        if (yourColors[3] === code[3]) {
            check7.style.backgroundColor = "purple";
        }
    }
    if (count === 2) {
        cell8.addEventListener('click', (e) => {
            cell8.style.backgroundColor = currentColor;
            yourColors[0] = cell8.style.backgroundColor;
        })
        cell9.addEventListener('click', (e) => {
            cell9.style.backgroundColor = currentColor;
            yourColors[1] = cell9.style.backgroundColor;
        })
        cell10.addEventListener('click', (e) => {
            cell10.style.backgroundColor = currentColor;
            yourColors[2] = cell10.style.backgroundColor;
        })
        cell11.addEventListener('click', (e) => {
            cell11.style.backgroundColor = currentColor;
            yourColors[3] = cell11.style.backgroundColor;
        })
    }
    if (countCheck === 3) {
        yourColors[0] = rgbToHex(yourColors[0]);
        yourColors[1] = rgbToHex(yourColors[1]);
        yourColors[2] = rgbToHex(yourColors[2]);
        yourColors[3] = rgbToHex(yourColors[3]);
        if (yourColors[0] === code[1] || yourColors[0] === code[2] || yourColors[0] === code[3]) {
            check8.style.backgroundColor = "black";
        }
        if (yourColors[1] === code[0] || yourColors[1] === code[2] || yourColors[1] === code[3]) {
            check9.style.backgroundColor = "black";
        }
        if (yourColors[2] === code[0] || yourColors[2] === code[1] || yourColors[2] === code[3]) {
            check10.style.backgroundColor = "black";
        }
        if (yourColors[3] === code[0] || yourColors[3] === code[2] || yourColors[3] === code[2]) {
            check11.style.backgroundColor = "black";
        }

        if (yourColors[0] === code[0]) {
            check8.style.backgroundColor = "purple";
        }
        if (yourColors[1] === code[1]) {
            check9.style.backgroundColor = "purple";
        }
        if (yourColors[2] === code[2]) {
            check10.style.backgroundColor = "purple";
        }
        if (yourColors[3] === code[3]) {
            check11.style.backgroundColor = "purple";
        }
    }
    if (count === 3) {
        cell12.addEventListener('click', (e) => {
            cell12.style.backgroundColor = currentColor;
            yourColors[0] = cell12.style.backgroundColor;
        })
        cell13.addEventListener('click', (e) => {
            cell13.style.backgroundColor = currentColor;
            yourColors[1] = cell13.style.backgroundColor;
        })
        cell14.addEventListener('click', (e) => {
            cell14.style.backgroundColor = currentColor;
            yourColors[2] = cell14.style.backgroundColor;
        })
        cell15.addEventListener('click', (e) => {
            cell15.style.backgroundColor = currentColor;
            yourColors[3] = cell15.style.backgroundColor;
        })
    }
    if (countCheck === 4) {
        yourColors[0] = rgbToHex(yourColors[0]);
        yourColors[1] = rgbToHex(yourColors[1]);
        yourColors[2] = rgbToHex(yourColors[2]);
        yourColors[3] = rgbToHex(yourColors[3]);
        if (yourColors[0] === code[1] || yourColors[0] === code[2] || yourColors[0] === code[3]) {
            check12.style.backgroundColor = "black";
        }
        if (yourColors[1] === code[0] || yourColors[1] === code[2] || yourColors[1] === code[3]) {
            check13.style.backgroundColor = "black";
        }
        if (yourColors[2] === code[0] || yourColors[2] === code[1] || yourColors[2] === code[3]) {
            check14.style.backgroundColor = "black";
        }
        if (yourColors[3] === code[0] || yourColors[3] === code[2] || yourColors[3] === code[2]) {
            check15.style.backgroundColor = "black";
        }

        if (yourColors[0] === code[0]) {
            check12.style.backgroundColor = "purple";
        }
        if (yourColors[1] === code[1]) {
            check13.style.backgroundColor = "purple";
        }
        if (yourColors[2] === code[2]) {
            check14.style.backgroundColor = "purple";
        }
        if (yourColors[3] === code[3]) {
            check15.style.backgroundColor = "purple";
        }
    }
    if (count === 4) {
        cell16.addEventListener('click', (e) => {
            cell16.style.backgroundColor = currentColor;
            yourColors[0] = cell16.style.backgroundColor;
        })
        cell17.addEventListener('click', (e) => {
            cell17.style.backgroundColor = currentColor;
            yourColors[1] = cell17.style.backgroundColor;
        })
        cell18.addEventListener('click', (e) => {
            cell18.style.backgroundColor = currentColor;
            yourColors[2] = cell18.style.backgroundColor;
        })
        cell19.addEventListener('click', (e) => {
            cell19.style.backgroundColor = currentColor;
            yourColors[3] = cell19.style.backgroundColor;
        })
    }
    if (countCheck === 5) {
        yourColors[0] = rgbToHex(yourColors[0]);
        yourColors[1] = rgbToHex(yourColors[1]);
        yourColors[2] = rgbToHex(yourColors[2]);
        yourColors[3] = rgbToHex(yourColors[3]);
        if (yourColors[0] === code[1] || yourColors[0] === code[2] || yourColors[0] === code[3]) {
            check16.style.backgroundColor = "black";
        }
        if (yourColors[1] === code[0] || yourColors[1] === code[2] || yourColors[1] === code[3]) {
            check17.style.backgroundColor = "black";
        }
        if (yourColors[2] === code[0] || yourColors[2] === code[1] || yourColors[2] === code[3]) {
            check18.style.backgroundColor = "black";
        }
        if (yourColors[3] === code[0] || yourColors[3] === code[2] || yourColors[3] === code[2]) {
            check19.style.backgroundColor = "black";
        }

        if (yourColors[0] === code[0]) {
            check16.style.backgroundColor = "purple";
        }
        if (yourColors[1] === code[1]) {
            check17.style.backgroundColor = "purple";
        }
        if (yourColors[2] === code[2]) {
            check18.style.backgroundColor = "purple";
        }
        if (yourColors[3] === code[3]) {
            check19.style.backgroundColor = "purple";
        }
    }
    if (count === 5) {
        cell20.addEventListener('click', (e) => {
            cell20.style.backgroundColor = currentColor;
            yourColors[0] = cell20.style.backgroundColor;
        })
        cell21.addEventListener('click', (e) => {
            cell21.style.backgroundColor = currentColor;
            yourColors[1] = cell21.style.backgroundColor;
        })
        cell22.addEventListener('click', (e) => {
            cell22.style.backgroundColor = currentColor;
            yourColors[2] = cell22.style.backgroundColor;
        })
        cell23.addEventListener('click', (e) => {
            cell23.style.backgroundColor = currentColor;
            yourColors[3] = cell23.style.backgroundColor;
        })
    }
    if (countCheck === 6) {
        yourColors[0] = rgbToHex(yourColors[0]);
        yourColors[1] = rgbToHex(yourColors[1]);
        yourColors[2] = rgbToHex(yourColors[2]);
        yourColors[3] = rgbToHex(yourColors[3]);
        if (yourColors[0] === code[1] || yourColors[0] === code[2] || yourColors[0] === code[3]) {
            check20.style.backgroundColor = "black";
        }
        if (yourColors[1] === code[0] || yourColors[1] === code[2] || yourColors[1] === code[3]) {
            check21.style.backgroundColor = "black";
        }
        if (yourColors[2] === code[0] || yourColors[2] === code[1] || yourColors[2] === code[3]) {
            check22.style.backgroundColor = "black";
        }
        if (yourColors[3] === code[0] || yourColors[3] === code[2] || yourColors[3] === code[2]) {
            check23.style.backgroundColor = "black";
        }

        if (yourColors[0] === code[0]) {
            check20.style.backgroundColor = "purple";
        }
        if (yourColors[1] === code[1]) {
            check21.style.backgroundColor = "purple";
        }
        if (yourColors[2] === code[2]) {
            check22.style.backgroundColor = "purple";
        }
        if (yourColors[3] === code[3]) {
            check23.style.backgroundColor = "purple";
        }
    }
    if (count === 6) {
        cell24.addEventListener('click', (e) => {
            cell24.style.backgroundColor = currentColor;
            yourColors[0] = cell24.style.backgroundColor;
        })
        cell25.addEventListener('click', (e) => {
            cell25.style.backgroundColor = currentColor;
            yourColors[1] = cell25.style.backgroundColor;
        })
        cell26.addEventListener('click', (e) => {
            cell26.style.backgroundColor = currentColor;
            yourColors[2] = cell26.style.backgroundColor;
        })
        cell27.addEventListener('click', (e) => {
            cell27.style.backgroundColor = currentColor;
            yourColors[3] = cell27.style.backgroundColor;
        })
    }
    if (countCheck === 7) {
        yourColors[0] = rgbToHex(yourColors[0]);
        yourColors[1] = rgbToHex(yourColors[1]);
        yourColors[2] = rgbToHex(yourColors[2]);
        yourColors[3] = rgbToHex(yourColors[3]);
        if (yourColors[0] === code[1] || yourColors[0] === code[2] || yourColors[0] === code[3]) {
            check24.style.backgroundColor = "black";
        }
        if (yourColors[1] === code[0] || yourColors[1] === code[2] || yourColors[1] === code[3]) {
            check25.style.backgroundColor = "black";
        }
        if (yourColors[2] === code[0] || yourColors[2] === code[1] || yourColors[2] === code[3]) {
            check26.style.backgroundColor = "black";
        }
        if (yourColors[3] === code[0] || yourColors[3] === code[2] || yourColors[3] === code[2]) {
            check27.style.backgroundColor = "black";
        }

        if (yourColors[0] === code[0]) {
            check24.style.backgroundColor = "purple";
        }
        if (yourColors[1] === code[1]) {
            check25.style.backgroundColor = "purple";
        }
        if (yourColors[2] === code[2]) {
            check26.style.backgroundColor = "purple";
        }
        if (yourColors[3] === code[3]) {
            check27.style.backgroundColor = "purple";
        }
        win(colors, yourColors);
    }
}
);
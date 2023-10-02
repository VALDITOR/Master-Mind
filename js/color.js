const colorSelect0 = document.getElementById('user-Color0');
const box0 = document.getElementById('color0');

colorSelect0.addEventListener('input', () =>{
    box0.style.backgroundColor = colorSelect0.value;
})

const colorSelect1 = document.getElementById('user-Color1');
const box1 = document.getElementById('color1');

colorSelect1.addEventListener('input', () =>{
    box1.style.backgroundColor = colorSelect1.value;
})

const colorSelect2 = document.getElementById('user-Color2');
const box2 = document.getElementById('color2');

colorSelect2.addEventListener('input', () =>{
    box2.style.backgroundColor = colorSelect2.value;
})

const colorSelect3 = document.getElementById('user-Color3');
const box3 = document.getElementById('color3');

colorSelect3.addEventListener('input', () =>{
    box3.style.backgroundColor = colorSelect3.value;
})
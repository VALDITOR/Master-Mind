const btnColorPage = document.getElementById('btnColorPage');
const colorSelect0 = document.getElementById('user-Color0');
const colorSelect1 = document.getElementById('user-Color1');
const colorSelect2 = document.getElementById('user-Color2');
const colorSelect3 = document.getElementById('user-Color3');
const box0 = document.getElementById('color0');
const box1 = document.getElementById('color1');
const box2 = document.getElementById('color2');
const box3 = document.getElementById('color3');

colorSelect0.addEventListener('input', () => {
    box0.style.backgroundColor = colorSelect0.value;

    let color0 = colorSelect0.value;

    localStorage.setItem("color1", color0);
})

colorSelect1.addEventListener('input', () => {
    box1.style.backgroundColor = colorSelect1.value;

    let color1 = colorSelect1.value;

    localStorage.setItem("color2", color1);
})

colorSelect2.addEventListener('input', () => {
    box2.style.backgroundColor = colorSelect2.value;

    let color2 = colorSelect2.value;

    localStorage.setItem("color3", color2);
})

colorSelect3.addEventListener('input', () => {
    box3.style.backgroundColor = colorSelect3.value;

    let color3 = colorSelect3.value;

    localStorage.setItem("color4", color3);
})

btnColorPage.addEventListener("click", function () {
    if (box0.style.backgroundColor === box1.style.backgroundColor ||
        box0.style.backgroundColor === box2.style.backgroundColor ||
        box0.style.backgroundColor === box3.style.backgroundColor ||
        box0.style.backgroundColor === "") {
        alert("You cannot leave a cell empty or duplicate");
    } else if (box1.style.backgroundColor === box2.style.backgroundColor ||
        box1.style.backgroundColor === box3.style.backgroundColor ||
        box1.style.backgroundColor === "") {
        alert("You cannot leave a cell empty or duplicate");
    } else if (box2.style.backgroundColor === box3.style.backgroundColor ||
        box2.style.backgroundColor === "") {
        alert("You cannot leave a cell empty or duplicate");
    } else if (box3.style.backgroundColor === "") {
        alert("You cannot leave a cell empty or duplicate");
    } else {
        window.location.href = "level.html"
    }
});
const text = document.getElementById("text");
const color = document.getElementById("color");
const bold = document.getElementById("b");
const italic = document.getElementById("i");

bold.addEventListener("click", function () {
    if (bold.checked) {
        text.style.fontWeight = "bold";
    } else {
        text.style.fontWeight = "normal";
    }
});

italic.addEventListener("change", function () {
    if (italic.checked) {
        text.style.fontStyle = "italic";
    } else {
        text.style.fontStyle = "normal";
    }
});

color.addEventListener("input", function () {
    text.style.color = color.value;
});
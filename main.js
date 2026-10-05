const text = document.getElementById("text");
const color = document.getElementById("color");
const size = document.getElementById("size");
const bold = document.getElementById("b");
const italic = document.getElementById("i");
const aligns = document.querySelectorAll("input[name='align']");

bold.addEventListener("click", () => {
    text.style.fontWeight = bold.checked ? "bold" : "normal";
});

italic.addEventListener("click", () => {
    text.style.fontStyle = italic.checked ? "italic" : "normal";
});

color.addEventListener("input", () => {
    text.style.color = color.value;
});

size.addEventListener("input", () => {
    text.style.fontSize = size.value + "px";
});

aligns.forEach(radio => {
    radio.addEventListener("change", () => {
        text.style.textAlign = radio.value;
    });
});
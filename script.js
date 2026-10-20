
const button = document.getElementById("colorButton");
const message = document.getElementById("message");

const colors = [
    { background: "linear-gradient(135deg, #dbeafe, #bfdbfe)", name: "Ocean Blue" },
    { background: "linear-gradient(135deg, #fce7f3, #f5d0fe)", name: "Dreamy Pink" },
    { background: "linear-gradient(135deg, #dcfce7, #a7f3d0)", name: "Fresh Green" },
    { background: "linear-gradient(135deg, #fef3c7, #fde68a)", name: "Sunshine Yellow" },
    { background: "linear-gradient(135deg, #ede9fe, #ddd6fe)", name: "Lavender" }
];

let colorIndex = 0;

button.addEventListener("click", function () {
    const selectedColor = colors[colorIndex];

    document.body.style.background = selectedColor.background;
    message.textContent = `Beautiful choice! ${selectedColor.name} is now active.`;

    colorIndex = (colorIndex + 1) % colors.length;
});

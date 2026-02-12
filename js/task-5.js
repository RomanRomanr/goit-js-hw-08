function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const newColor = getRandomHexColor;
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

const callback = () => {
  const currentColor = document.body.style.backgroundColor = newColor();
  span.textContent = currentColor;
}
button.addEventListener("click", callback);
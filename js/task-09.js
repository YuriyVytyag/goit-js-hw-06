const bodyColor = document.querySelector('.widget');
const colorText = document.querySelector('.color');
const body = document.querySelector('body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = body.style.backgroundColor;
};

body.addEventListener('click', randomColor);

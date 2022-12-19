const bodyColor = document.querySelector('.widget');
const colorText = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const body = document.body;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColor = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorText.textContent = color;
};

btnEl.addEventListener('click', randomColor);

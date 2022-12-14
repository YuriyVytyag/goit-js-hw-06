/* Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту. */

const inputSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
console.log(inputSize.value);
function sizeChanging() {
  spanText.style['font-size'] = inputSize.value + 'px';
}
inputSize.addEventListener('input', sizeChanging);
/* console.log(inputSize.range);
console.log(spanText.value);
inputSize.addEventListener('input', sizeChanging); */

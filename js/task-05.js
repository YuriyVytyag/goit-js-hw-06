/* Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous". */
let inputEL = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
function identification() {
  if (inputEL.value === '') {
    outputEl.textContent = 'Anonymous';
  } else outputEl.textContent = inputEL.value;
}
console.log(inputEL);
console.log(outputEl);
console.log(inputEL.addEventListener('input', identification));

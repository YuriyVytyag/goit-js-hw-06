/* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання. */
const validInput = document.querySelector('#validation-input');
const lengthOk = document.querySelector('input[data-length="6"]');
// const checking = () => {
//   if (validInput.value.length === lengthOk) {
//     /*     validInput.classList.remove('invalid');
//      */ validInput.classList.add('valid');
//   } else if (validInput.value != lengthOk) {
//     /*     validInput.classList.remove('valid');
//      */ validInput.classList.add('invalid');
//   }
// };
/* validInput.addEventListener('blur', () => {
  if (validInput.value.length == lengthOk.dataset.length) {
    validInput.classList.remove('invalid');
    validInput.classList.add('valid');
  } else if (validInput.value != lengthOk) {
    validInput.classList.remove('valid');
    validInput.classList.add('invalid');
  }
}); */
function validation() {
  if (validInput.value.length == lengthOk.dataset.length) {
    validInput.classList.remove('invalid');
    validInput.classList.add('valid');
  } else if (validInput.value != lengthOk) {
    validInput.classList.remove('valid');
    validInput.classList.add('invalid');
  }
}

validInput.addEventListener('blur', validation);

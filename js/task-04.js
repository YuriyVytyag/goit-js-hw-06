let counterValue = 0;
const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');
console.log(incrementBtn);
console.log(decrementBtn);
console.log(valueEl);

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

/* const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(`Email: ${email.value}, Password: ${password.value}`);
}); */

const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Будь ласка заповніть усі поля!');
  }
  const userData = { email: email.value, password: password.value };
  console.log(userData);
}

/*   console.log(`Email: ${email.value}, Password: ${password.value}`);
});

if (event.currentTarget.value === '') {
  return 'Alert';
} */

const inputEl = document.querySelector('#validation-input');
const validCountChar = Number(inputEl.dataset.length); // Отримує числове значення з data-атрибуту

const blur = event => {
  const countChar = event.currentTarget.value.length; // Отримує поточне число символів в полі введення

  // Порівнює число введених символів з валідним числом
  if (countChar === validCountChar) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', blur);

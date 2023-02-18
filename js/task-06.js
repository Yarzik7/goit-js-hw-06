const input = document.querySelector('#validation-input');
const validCountChar = Number(input.dataset.length);

const blur = event => {
  const countChar = event.currentTarget.value.length;
  if (countChar === validCountChar) {
    input.classList.add('valid');
    return;
  }

  input.classList.add('invalid');
};

input.addEventListener('blur', blur);

const input = document.querySelector('#validation-input');
const validCountChar = Number(input.dataset.length);

const blur = event => {
  const countChar = event.currentTarget.value.length;
  if (countChar === validCountChar) {
    if (input.classList.value.includes('invalid')) input.classList.remove('invalid');
    input.classList.add('valid');
    return;
  }

  if (input.classList.value.includes('valid')) input.classList.remove('valid');
  input.classList.add('invalid');
};

input.addEventListener('blur', blur);

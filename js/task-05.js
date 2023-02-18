const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const inputEvent = event => {
  span.innerText = event.currentTarget.value;
  if (!span.innerText) span.innerText = 'Anonymous';
};

input.addEventListener('input', inputEvent);

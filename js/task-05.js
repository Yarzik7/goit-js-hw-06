const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const inputEvent = event => {
  spanEl.textContent = event.currentTarget.value;
  if (!spanEl.textContent) spanEl.textContent = 'Anonymous';
};

inputEl.addEventListener('input', inputEvent);

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const inputEvent = ({ currentTarget: { value } }) => value ? spanEl.textContent = value : spanEl.textContent = 'Anonymous';

inputEl.addEventListener('input', inputEvent);

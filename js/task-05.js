const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const inputEvent = ({ currentTarget: { value } }) => {
  if (!value) {
    spanEl.textContent = 'Anonymous';
    return;
  }
  spanEl.textContent = value;
};

inputEl.addEventListener('input', inputEvent);

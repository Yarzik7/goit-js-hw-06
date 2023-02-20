const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const changeInput = event => {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
};

inputEl.addEventListener('input', changeInput);

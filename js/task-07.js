const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

const changeInput = event => {
  span.style.fontSize = `${event.currentTarget.value}px`;
};

input.addEventListener('input', changeInput);

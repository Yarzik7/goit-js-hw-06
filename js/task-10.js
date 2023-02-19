function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let boxSize = 30;

function callCreateBoxes() {
  createBoxes(Number(inputNumber.value));
}

const createBoxes = amount => {
  const marcupBoxes = [];
  for (let i = 0; i < amount; i += 1, boxSize += 10) {
    marcupBoxes.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`
    );
  }
  boxes.insertAdjacentHTML('beforeend', marcupBoxes.join(''));
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
  inputNumber.value = '';
  boxSize = 30;
};

btnCreate.addEventListener('click', callCreateBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

inputNumber.value = 5;

let boxSize = 30;

// function getNumber() {
//   inputValue = inputNumber.value;
//   console.log("gN",inputValue);
//   return inputNumber.value;
// }

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
  //console.log(marcupBoxes);
  //console.log(amount);
  //console.log('n', inputValue);
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
  boxSize = 30;
};

//const callCreateBoxes = createBoxes.bind(inputNumber, inputNumber.value);

//const create = createBoxes.bind();

//inputNumber.addEventListener('input', getNumber.bind(inputNumber));

btnCreate.addEventListener('click', callCreateBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

//btnCreate.addEventListener('click', createBoxes.bind(btnCreate, getNumber.call(inputNumber)));
//btnCreate.addEventListener('click', createBoxes.bind(btnCreate, getNumber.bind(inputNumber)));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let boxSize = 30; // Розмір першого елемента <div>

// Функція для виклику createBoxes з передачею введеного числа елементів
function onBtnCreate() {
  createBoxes(Number(this.value));
}

// Створення елементів <div>
const createBoxes = amount => {
  const marcupBoxes = []; // Масив для зберігання окремих <div>

  // Створення окремого <div> і занесення його до масиву
  for (let i = 0; i < amount; i += 1, boxSize += 10) {
    marcupBoxes.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`
    );
  }

  boxes.insertAdjacentHTML('beforeend', marcupBoxes.join('')); // Додавання розмітки створених елементів на сторінку
};

// Видалення <div> і повернення значень змінних до початкового стану
const destroyBoxes = () => {
  boxes.innerHTML = '';
  inputNumber.value = '';
  boxSize = 30;
};

btnCreate.addEventListener('click', onBtnCreate.bind(inputNumber));
btnDestroy.addEventListener('click', destroyBoxes);

let countValue = 0;

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const countLine = document.querySelector('#value');

function btnClick() {
  switch (this.dataset.action) {
    case 'increment':
      countValue += 1;
      break;
    case 'decrement':
      countValue -= 1;
      break;
    default:
      console.log('Error');
  }

  countLine.innerText = `${countValue}`;
}

const increment = btnClick.bind(btnIncrement);
const decrement = btnClick.bind(btnDecrement);

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);

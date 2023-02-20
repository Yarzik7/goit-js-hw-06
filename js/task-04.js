let countValue = 0;

const btnIncrementEl = document.querySelector('[data-action="increment"]');
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const countLineEl = document.querySelector('#value');

// Функція виконує операцію в залежності від data-атрибуту
const onOperationBtn = event => {
  countValue = event.currentTarget.dataset.action === 'increment' ? countValue += 1 : countValue -= 1;
  countLineEl.textContent = `${countValue}`;
};

btnIncrementEl.addEventListener('click', onOperationBtn);
btnDecrementEl.addEventListener('click', onOperationBtn);

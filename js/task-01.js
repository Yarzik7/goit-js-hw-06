const categoriesItemEl = document.querySelectorAll('.item'); // Отримуємо посилання на колекцію вузлів з селектором .item

console.log(
  'Number of categories: ',
  categoriesItemEl.length, // Виведення кількості категорій
  '\n\n'
);

// Перебір колекції елементів .item
categoriesItemEl.forEach((item, i) => {
  console.log('Category: ', item.querySelector('h2').innerText); // Виведення назви категорії
  console.log('Elements: ', item.querySelector('ul').children.length); // Виведення кількості елементів категорії
  if (i < categoriesItemEl.length - 1) console.log('\n');
});

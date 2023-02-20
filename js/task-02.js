const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const items = []; // Масив для зберігання окремих елементів li

ingredients.forEach((ingradient, i) => {
  items.push(document.createElement("li")); // Додає до масиву items посилання на окремий елемент li
  items[i].textContent = ingradient; // Додає в елемент відповідний контент
  items[i].classList.add("item"); // Додає до елементу клас "item"
});

ingredientsEl.append(...items); // Додає всі елементи li в список ul#ingardients за одну операцію
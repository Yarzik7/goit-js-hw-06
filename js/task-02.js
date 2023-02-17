const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const INGRADIENTS = document.querySelector("#ingredients");
const items = [];

ingredients.forEach((ingradient, i) => {
  items.push(document.createElement("li"));
  items[i].textContent = ingradient;
  items[i].classList.add("item");
});

INGRADIENTS.append(...items);


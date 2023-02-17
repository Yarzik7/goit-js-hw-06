const categoriesList = document.querySelector("#categories");
const categoriesItem = document.querySelectorAll(".item"); //categoriesList.children;//document.querySelectorAll("#categories item");
const categoryNames = document.querySelectorAll("h2"); //categoriesItem.childNodes;

const categoriesArray = categoriesList.children;

console.log("Numbers of categories: ", categoriesArray.length, "\n\n");
//console.log(categoriesItem);
//console.log(categoryNames);
//categoryNames.forEach((name) => console.log("Category: ",name.innerText));

categoriesItem.forEach((item) => {
  console.log("Category: ", item.querySelector("h2").innerText);
  console.log("Elements: ", item.querySelector("ul").children.length, "\n\n");
});
//const categoryNames = categoriesArray.map(category => category)

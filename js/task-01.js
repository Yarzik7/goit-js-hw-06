const categoriesCount = document.querySelector("#categories").children.length;
const categoriesItem = document.querySelectorAll(".item"); //categoriesList.children;//document.querySelectorAll("#categories item");
//const categoryNames = document.querySelectorAll("h2"); //categoriesItem.childNodes;

//const categoriesArray = categoriesList.children;

console.log("Numbers of categories: ", categoriesCount, "\n\n");
//console.log(categoriesCount);
//console.log(categoriesItem);
//console.log(categoryNames);
//categoryNames.forEach((name) => console.log("Category: ",name.innerText));

categoriesItem.forEach((item, i) => {
  console.log("Category: ", item.querySelector("h2").innerText);
  console.log("Elements: ", item.querySelector("ul").children.length);
  if (i < categoriesItem.length - 1) console.log("\n");
});

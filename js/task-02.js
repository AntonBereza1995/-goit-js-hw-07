const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

console.log(ingredients);



const ingredientsList = document.querySelector("ul#ingredients")
const addItems = ingredients.map((elem) => {
    const createItems = document.createElement('li')
    createItems.textContent = elem;
return createItems
}
)
ingredientsList.append(...addItems);
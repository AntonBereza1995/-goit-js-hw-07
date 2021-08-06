const allCategories = document.querySelectorAll(".item")

console.log(`В списке ${allCategories.length} категории`)

allCategories.forEach(item =>
console.log(`Категория: ${item.querySelector("h2").textContent}
Количество элементов: ${item.querySelectorAll("li").length}`))
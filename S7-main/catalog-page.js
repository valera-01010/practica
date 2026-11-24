// Данные каталога (перенесены из catalog.js)
const catalog = [
  {
    position: 1,
    name: "Пластик",
    specs: "Чистый · по маркировке",
    description: "Бутылки и подходящая тара"
  },
  {
    position: 2,
    name: "Стекло",
    specs: "Целое · без крышек",
    description: "Банки и стеклянные бутылки"
  },
  {
    position: 3,
    name: "Бумага",
    specs: "Сухая · без загрязнений",
    description: "Газеты, тетради и чистая упаковка"
  }
];

// Доп. задание: поиск по двум полям (название и характеристика)
function filterByTextAndSpecs(items, query) {
  const normalized = query.trim().toLowerCase();
  
  if (normalized === "") {
    return items;
  }
  
  return items.filter(item =>
    item.name.toLowerCase().includes(normalized) ||
    item.specs.toLowerCase().includes(normalized)
  );
}

// Находим элементы на странице
const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");

// Функция отрисовки карточек
function renderCatalog(items) {
  // Очищаем контейнер перед новым выводом
  catalogList.replaceChildren(); 
  
  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = item.name;

    const specs = document.createElement("p");
    specs.textContent = item.specs;
    specs.className = "specs"; // Класс для стилизации плашки характеристики

    const description = document.createElement("p");
    description.textContent = item.description;
    description.className = "description"; // Класс для стилизации описания

    // Собираем карточку и вставляем в контейнер
    card.append(title, specs, description);
    catalogList.append(card);
  }

  // Обновляем счетчик
  if (items.length === 0) {
    statusText.textContent = "Ничего не найдено";
  } else {
    statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
  }
}

// Первый рендер всех карточек при загрузке
renderCatalog(catalog);

// Обработка поиска
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
  const found = filterByTextAndSpecs(catalog, searchInput.value);
  renderCatalog(found);
});
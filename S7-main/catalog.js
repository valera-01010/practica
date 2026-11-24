console.log("Расчёт моего приложения");

/* ---------- 1. Массив карточек ---------- */
const catalog = [
  { position: 1, name: "Пластик", specs: "Чистый · по маркировке", description: "Бутылки и подходящая тара" },
  { position: 2, name: "Стекло", specs: "Целое · без крышек", description: "Банки и стеклянные бутылки" },
  { position: 3, name: "Бумага", specs: "Сухая · без загрязнений", description: "Газеты, тетради и чистая упаковка" }
];

/* ---------- 2. Расчёт по выбранной записи ---------- */
const itemName = "Пластик";
const quantityText = "3";
const unitValue = 5;
const extraValue = 2;
const isTraining = true;

function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") return "Ошибка: укажите количество";
  const quantity = Number(quantityText);
  if (!Number.isFinite(quantity)) return "Ошибка: введите число";
  if (quantity <= 0 || !Number.isInteger(quantity)) return "Ошибка: нужно положительное целое количество";
  return "Итого: " + (unitAmount * quantity + extraAmount);
}

/* ---------- 3. Работа со списком в консоли (map, filter, find) ---------- */
const names = catalog.map(item => item.name);
const longNames = catalog.filter(item => item.name.length >= 6);
const found = catalog.find(item => item.name === "Стекло");

/* ---------- 4. DOM: Поиск элементов и вывод (Шаги 3, 4) ---------- */
const status = document.querySelector("#status");
status.textContent = catalog[0].name + " — " + catalog.length + " записей";

/* ---------- 5. DOM: Создание элементов (Шаг 5) ---------- */
const namesList = document.querySelector("#names");

function renderNames() {
  namesList.replaceChildren(); // Очищаем список перед новым выводом
  for (const item of catalog) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }
}

/* ---------- 6. DOM: Реагируем на действие (Шаг 6) ---------- */
const showButton = document.querySelector("#show-names");
const hideButton = document.querySelector("#hide-names"); // Доп. задание 1

let clicks = 0; // Доп. задание 2

// Обработчик кнопки "Показать"
showButton.addEventListener("click", function() {
  clicks++; // Увеличиваем счетчик нажатий
  status.textContent = "Нажато раз: " + clicks;
  renderNames();
});

// Обработчик кнопки "Скрыть" (Доп. задание 1)
hideButton.addEventListener("click", function() {
  namesList.replaceChildren();
  status.textContent = "Список скрыт";
});

/* ---------- 7. Доп. задание 3: Все параграфы ---------- */
const allParagraphs = document.querySelectorAll("p");
console.log("Всего параграфов на странице:", allParagraphs.length);
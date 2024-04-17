document.getElementById("searchBtn").addEventListener("click", function () {
  var query1 = document.getElementById("query1").value;
  var query2 = document.getElementById("query2").value;

  // Отправляем запрос на сервер
  fetch("/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query1: query1, query2: query2 }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Обработка ответа от сервера и отображение результатов
      displayResults(data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});

function displayResults(data) {
  var resultsContainer = document.getElementById("results");
  // Очищаем результаты от предыдущих запросов
  resultsContainer.innerHTML = "";

  // Создаем элементы для отображения результатов
  var result1 = document.createElement("p");
  result1.textContent = data.result1;

  var result2 = document.createElement("p");
  result2.textContent = data.result2;

  // Добавляем результаты в контейнер
  resultsContainer.appendChild(result1);
  resultsContainer.appendChild(result2);
}

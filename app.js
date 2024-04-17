const express = require("express");
const searchRoutes = require("./routes/searchRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/", (req, res) => {
	// логика приложения
});

app.listen(port, () => {
  console.log(`Сервер запущен тут http://localhost:${port}`);
});

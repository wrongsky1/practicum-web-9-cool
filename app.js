const express = require("express");
const path = require("path");

const errorHandler = require("./middlewares/errorHandler");
const mainRoute = require("./routes/main");
const searchRoute = require("./routes/search");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  express.json(),
  errorHandler,
  express.static(path.join(__dirname, "public")),
  mainRoute,
  searchRoute
);

// много нового кода
// много нового кода
// много нового кода
// много нового кода

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));

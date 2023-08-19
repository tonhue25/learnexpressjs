const express = require("express");
const path = require("path");
const morgan = require("morgan");

const hbs = require("express-handlebars");

const route = require("./routes");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
// add middleware submit body.
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

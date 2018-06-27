const app = require("express")();
const bodyParser = require("body-parser");
const apiRouter = require("./routers/api");

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("All Good");
});
app.use("/api", apiRouter);

app.use("/*", (req, res, next) => {
  next({ status: 404, message: "Page not found" });
});

app.use((err, req, res, next) => {
  if (err.status) res.status(err.status).send({ message: err.message });
  else next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ message: "Internal Server Error" });
});

module.exports = app;

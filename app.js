const app = require("express")();
const bodyParser = require("body-parser");
const apiRouter = require("./routers/api");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("All Good");
});
app.use("/api", apiRouter);

app.use("/*", (req, res) => {
  res.status(404).send("Page does not exsist");
});

app.use((err, req, res, next) => {
  res.status(500).send({ err });
});

module.exports = app;

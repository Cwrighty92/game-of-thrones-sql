const apiRouter = require("express").Router();
const housesRouter = require("./houses");
const peopleRouter = require("./people");
const religionsRouter = require("./religions");

apiRouter.get("/", (req, res) => {
  res.send("API Page");
});
apiRouter.use("/houses", housesRouter);
apiRouter.use("/people", peopleRouter);
apiRouter.use("/religions", religionsRouter);

module.exports = apiRouter;

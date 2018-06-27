const religionsRouter = require("express").Router();
const { getReligions, createReligion } = require("../controllers/religions");

religionsRouter
  .route("/")
  .get(getReligions)
  .post(createReligion);

module.exports = religionsRouter;

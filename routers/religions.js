const religionsRouter = require("express").Router();
const { getReligions, createReligion, getReligionForHouse } = require("../controllers/religions");

religionsRouter
  .route("/")
  .get(getReligions)
  .post(createReligion);
religionsRouter.route("/houses/:house_id").get(getReligionForHouse);

module.exports = religionsRouter;

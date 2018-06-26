const housesRouter = require("express").Router();
const {
  getHouses,
  getHouseByID,
  createHouse
} = require("../controllers/houses");

housesRouter
  .route("/")
  .get(getHouses)
  .post(createHouse);
  
housesRouter.get("/:house_id", getHouseByID);

module.exports = housesRouter;

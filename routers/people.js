const peopleRouter = require("express").Router();
const {
  getPeople,
  getPeopleByID,
  createPeople,
  deadOrAlive,
  getPeopleByHouse
} = require("../controllers/people");

peopleRouter
  .route("/")
  .get(getPeople)
  .post(createPeople);
peopleRouter
  .route("/:person_id")
  .get(getPeopleByID)
  .put(deadOrAlive);
peopleRouter.route("/houses/:house_id").get(getPeopleByHouse);

module.exports = peopleRouter;

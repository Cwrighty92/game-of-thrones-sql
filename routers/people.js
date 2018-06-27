const peopleRouter = require("express").Router();
const {
  getPeople,
  getPeopleByID,
  createPeople,
  deadOrAlive
} = require("../controllers/people");

peopleRouter
  .route("/")
  .get(getPeople)
  .post(createPeople);
peopleRouter
  .route("/:person_id")
  .get(getPeopleByID)
  .put(deadOrAlive);

module.exports = peopleRouter;

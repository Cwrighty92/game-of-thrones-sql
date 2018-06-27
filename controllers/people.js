const db = require("../db");

const getPeople = (req, res, next) => {
  let where = "";
  let queryValue = "";
  if (req.query.dead) {
    where = "WHERE people.dead = $1";
    queryValue = req.query.dead;
    return db
      .many(`SELECT * FROM people ${where}`, [queryValue])
      .then(query => {
        res.status(200).send({ query });
      })
      .catch(next);
  } else if (req.query.religion_id) {
    // where = "WHERE people.religion_id = $1";
    queryValue = req.query.religion_id;
    return db
      .many(`SELECT * from people WHERE religion_id = $1`, [queryValue])
      .then(query => {
        res.status(200).send({ query });
      })
      .catch(next);
  } else {
    return db.many("SELECT * FROM people;").then(people => {
      res.render("pages/people", { people });
    });
  }
};

const getPeopleByID = (req, res, next) => {
  const { person_id } = req.params;
  db.one("SELECT * FROM people WHERE people_id =$1", [person_id])
    .then(person => {
      res.status(200).send({ person });
    })
    .catch(err => {
      err.code === 0
        ? next({
            status: 404,
            message: `Page for people ${person_id} not found`
          })
        : next({
            status: 400,
            message: `Bad request : people ${person_id} is invalid`
          });
    });
};

const getPeopleByHouse = (req, res, next) => {
  const { house_id } = req.params;
  db.many(
    "SELECT * FROM people JOIN houses ON people.house_id = houses.house_id WHERE houses.house_id =$1",
    [house_id]
  )
    .then(people => {
      res.status(200).send({ people });
    })
    .catch(err => {
      err.code === 0
        ? next({
            status: 404,
            message: `Page for house ${house_id} not found`
          })
        : next({
            status: 400,
            message: `Bad request : house ${house_id} is invalid`
          });
    });
};

const createPeople = (req, res, next) => {
  db.one(
    "INSERT INTO people (person, picture_url, dead, house_id, religion_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
    Object.values(req.body)
  )
    .then(person => {
      res.status(201).send({ person });
    })
    .catch(next);
};

const deadOrAlive = (req, res, next) => {
  const { person_id } = req.params;
  const { person_body } = req.body.dead;

  db.none("UPDATE people SET dead $1 WHERE people_id = $2 RETURNING *;", [
    person_body,
    person_id
  ])
    .then(person => {
      res.status(200).send({ person });
    })
    .catch(next);
};

module.exports = {
  getPeople,
  getPeopleByID,
  createPeople,
  deadOrAlive,
  getPeopleByHouse
};

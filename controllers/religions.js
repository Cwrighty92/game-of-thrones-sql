const db = require("../db");

const getReligions = (req, res, next) => {
  db.many("SELECT * FROM religions;")
    .then(religion => {
      res.send({ religion });
    })
    .catch(next);
};

const createReligion = (req, res, next) => {
  db.one(
    "INSERT INTO religions (religion, religion_type, god) VALUES ($1, $2, $3) RETURNING *;",
    Object.values(req.body)
  )
    .then(religion => {
      res.status(201).send({ religion });
    })
    .catch(next);
};

const getReligionForHouse = (req, res, next) => {
  const { house_id } = req.params;
  db.many(
    "SELECT religion, houses.house_id, house_name FROM people JOIN houses ON people.house_id = houses.house_id JOIN religions ON people.religion_id = religions.religion_id WHERE houses.house_id =$1",
    [house_id]
  )
    .then(house => {
      res.status(200).send({ house });
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

module.exports = { getReligions, createReligion, getReligionForHouse };

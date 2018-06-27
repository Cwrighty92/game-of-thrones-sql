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
    "INSERT INTO religion (religion, religion_type, god) VALUES ($1, $2, $3) RETURNING *;",
    Object.values(req.body)
  ).then(house => {
    res.status(201).send({ house });
  });
};

module.exports = { getReligions, createReligion };

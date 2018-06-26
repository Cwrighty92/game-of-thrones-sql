const db = require("../db");

const getHouses = (req, res, next) => {
  db.many("SELECT * FROM houses;").then(houses => {
    res.status(200).send({ houses });
  });
};

const getHouseByID = (req, res, next) => {
  const { house_id } = req.params;
  db.one("SELECT * FROM houses WHERE house_id=$1;", [house_id]).then(house => {
    res.send({ house });
  });
};

const createHouse = (req, res, next) => {
  db.one("INSERT INTO houses (house_name, sigil_img, words, seat, region) VALUES ($1, $2, $3, $4, $5) RETURNING *;", Object.values(req.body)).then(
    house => {
      res.status(201).send({ house });
    }
  );
};

module.exports = { getHouses, getHouseByID, createHouse };

const db = require("../db");

const getHouses = (req, res, next) => {
  db.many("SELECT * FROM houses;")
    .then(houses => {
      res.status(200).render("pages/house", { houses });
    })
    .catch(next);
};

const getHouseByID = (req, res, next) => {
  const { house_id } = req.params;
  db.one("SELECT * FROM houses WHERE house_id=$1;", [house_id])
    .then(house => {
      res.send({ house });
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

const createHouse = (req, res, next) => {
  db.one(
    "INSERT INTO houses (house_name, sigil_img, words, seat, region) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
    Object.values(req.body)
  )
    .then(house => {
      res.status(201).send({ house });
    })
    .catch(err => {
      switch (err.code) {
        case "22001":
          next({
            status: 400,
            message:
              "Value in House Name, Sigil, Seat or Region is over character limit within body"
          });
          break;
        case "23502":
          next({
            status: 400,
            message: "Did not expect Null within an element within the body"
          });
          break;
      }
    });
};

module.exports = { getHouses, getHouseByID, createHouse };

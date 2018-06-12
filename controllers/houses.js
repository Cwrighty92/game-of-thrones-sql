const db = require('../db');


const getHouses = (req, res, next) => {
  db.many('SELECT * FROM houses;')
    .then(houses => {
      res.send({ houses });
    })
}

const getHouseByID = (req, res, next) => {
  const { house_id } = req.params;
  db.one('SELECT * FROM houses WHERE house_id=$1;', [house_id])
    .then(house => {
      res.send({ house });
    })
}



module.exports = { getHouses, getHouseByID }

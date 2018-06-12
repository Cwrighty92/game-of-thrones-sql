const db = require('../db');



const getPeople = (req, res, next) => {
  db.many('SELECT * FROM people;')
    .then(people => {
      res.send({ people })
    })
}




module.exports = { getPeople }
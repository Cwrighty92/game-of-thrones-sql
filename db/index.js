const { DB } = require("../config");
const pgp = require("pg-promise")({ promiselib: Promise });

module.exports = pgp(DB);

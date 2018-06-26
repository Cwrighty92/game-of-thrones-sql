const NODE_ENV = process.env.NODE_ENV || "dev";

const dev = {
  DB: {
    host: "localhost",
    port: 5432,
    database: "game_of_sql"
  },
  PORT: 9090
};
const test = {
  DB: {
    host: "localhost",
    port: 5432,
    database: "game_of_sql_test"
  },
  PORT: 9091
};

const config = {
  dev,
  test
};

module.exports = config[NODE_ENV];

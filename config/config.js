require("dotenv").config()

module.exports= {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_Pass,
    "database": process.env.DB_Name,
    "host": process.env.DB_host,
    "dialect": "mysql",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": true,
      },
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

require('dotenv').config()

const db = process.env.DBNAME;
const password = process.env.DBPASSWORD;
const username = process.env.DBUSERNAME;
const host = process.env.DBHOST;
const port =process.env.DBPORT;

module.exports ={
  "development": {
    "username": process.env.DBUSERNAME,
    "password": process.env.DBPASSWORD,
    "database": process.env.DBNAME,
   "host": process.env.DBHOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
   "username": username,
   "password": password,
   "database": db,
   "host": host,
   "dialect": "mysql",
   "port": port
  }
}

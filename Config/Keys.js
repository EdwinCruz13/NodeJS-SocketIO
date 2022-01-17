require('dotenv').config(); //bring config file
const mssql = require('mssql');


const Connection = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER,
    port: 1433,
    database: process.env.DB_DATABASE,
    connectionTimeout: 30000,
    parseJSON: true,
    options: {
        encrypt: false
    },
}

module.exports = { Connection }
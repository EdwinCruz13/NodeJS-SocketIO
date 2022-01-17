require('dotenv').config(); //bring config file
const mssql = require('mssql');


const Connection = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    connectionTimeout: parseInt(process.env.DB_TIMEOUT),
    parseJSON: true,
    options: {
        encrypt: false
    },
}

module.exports = { Connection }
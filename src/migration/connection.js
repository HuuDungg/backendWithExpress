//tesst data base
require('dotenv').config();
const mysql = require('mysql2');
const createConnection = () => {
    return mysql.createPool({
        host: process.env.HOST_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.PORT_DB,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });
}


exports.createConnection = createConnection;
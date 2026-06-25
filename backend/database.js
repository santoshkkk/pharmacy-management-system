const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

function connectDB() {
    db.connect((err) => {
        if (err) {
            console.log("DB not ready, retrying...");
            setTimeout(connectDB, 5000);
        } else {
            console.log("Connected to MySQL");
        }
    });
}

connectDB();

module.exports = db;

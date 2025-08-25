const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",           
  password: "246810Re;:::", 
  database: "saiketdb", 
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL");
    connection.release();
  }
});

module.exports = pool.promise();

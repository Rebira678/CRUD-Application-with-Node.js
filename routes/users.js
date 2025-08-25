const express = require("express");
const router = express.Router();
const pool = require("../db");

// Create users table if it doesn't exist
(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        age INT
      )
    `);
    console.log("✅ Users table ready");
  } catch (err) {
    console.error("❌ Error creating table:", err.message);
  }
})();

// 🟢 Create user
router.post("/", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const [result] = await pool.query(
      "INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
      [name, email, age]
    );
    res.json({ success: true, user: { id: result.insertId, name, email, age } });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// 🟢 List users
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json({ success: true, users: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 🟢 Get one user
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, user: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 🟢 Update user
router.put("/:id", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const [result] = await pool.query(
      "UPDATE users SET name=?, email=?, age=? WHERE id=?",
      [name, email, age, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, user: { id: req.params.id, name, email, age } });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// 🟢 Delete user
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM users WHERE id=?", [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

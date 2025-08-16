// albumController.js
const db = require('../models/db');

// GET /products
exports.getAllProducts = (req, res) => {
  db.query('SELECT id, title, artist, year FROM albums', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// GET /products/:id
exports.getProductById = (req, res) => {
  db.query('SELECT id, title, artist, year FROM albums WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

// POST /products
exports.createProduct = (req, res) => {
  const { title, artist, year } = req.body;
  db.query(
    'INSERT INTO albums (title, artist, year) VALUES (?, ?, ?)',
    [title, artist, year],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, title, artist, year });
    }
  );
};

// PUT /products/:id
exports.updateProduct = (req, res) => {
  const { title, artist, year } = req.body;
  db.query(
    'UPDATE albums SET title = ?, artist = ?, year = ? WHERE id = ?',
    [title, artist, year, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true });
    }
  );
};

// DELETE /products/:id
exports.deleteProduct = (req, res) => {
  db.query('DELETE FROM albums WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
};

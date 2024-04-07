const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const db = require('./database');
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Fetch Categories 
app.get('/categories', (req, res) => {
  const sql = 'SELECT * FROM category';

  db.all(sql, [], (err, rows) => {
    if (err) {

      res.status(400).json({ "error": err.message });
      return;
    }

    res.json({
      "message": "success",
      "data": rows
    });
  });
});

// Fetch dua
app.get('/duas', (req, res) => {
  const sql = 'SELECT * FROM dua';

  db.all(sql, [], (err, rows) => {
    if (err) {

      res.status(400).json({ "error": err.message });
      return;
    }

    res.json({
      "message": "success",
      "data": rows
    });
  });
});

app.get('/duas/category/:cat_id', (req, res) => {
  const sql = `SELECT * FROM dua WHERE cat_id = ?`;
  const params = [req.params.cat_id];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });

})

app.get('/duas/subcategory/:subcat_id', (req, res) => {
  const sql = `SELECT * FROM dua WHERE subcat_id = ?`;
  const params = [req.params.subcat_id];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });

})



// Fetch Sub Categories 
app.get('/sub-categories', (req, res) => {
  const sql = 'SELECT * FROM sub_category';

  db.all(sql, [], (err, rows) => {
    if (err) {

      res.status(400).json({ "error": err.message });
      return;
    }

    res.json({
      "message": "success",
      "data": rows
    });
  });
});

app.get('/categories/:cat_id/subcategories', (req, res) => {
  const sql = `SELECT * FROM sub_category WHERE cat_id = ?`;
  const params = [req.params.cat_id];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });
});

app.get('/subcategories/:cat_id', (req, res) => {
  const sql = `SELECT * FROM sub_category WHERE cat_id = ?`;
  const params = [req.params.cat_id];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });

})

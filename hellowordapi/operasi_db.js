const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  passowrd: "",
  database: "social_media",
});

//endpoint
app.get("/connection", (req, res) => {
  db.connect(function (err) {
    if (err) {
      res.json({ status: 200, message: "Koneksi gagal dilakukan.", data: err });
    } else {
      res.json({ status: 200, message: "Koneksi berhasil dilakukan." });
    }
  });
});
// tabel users -- start
// create
app.post("/users", (req, res) => {
  let sql =
    "INSERT INTO users SET username='" +
    req.body.username +
    "', password=password('" +
    req.body.password +
    "'), fullname='" +
    req.body.fullname +
    "', picture='" +
    req.body.picture +
    "'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ status: 200, error: null, response: results, data: req.body });
  });
});
// retrieve
app.get("/users/:id", (req, res) => {
  let sql = "SELECT * FROM users WHERE username='" + req.params.id + "'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ status: 200, message: "Data berhasil diambil.", data: results });
  });
});
// update
app.put("/users/:id", (req, res) => {
  let sql =
    "UPDATE users SET password=password('" +
    req.body.password +
    "'), fullname='" +
    req.body.fullname +
    "', picture='" +
    req.body.picture +
    "'" +
    " WHERE username='" +
    req.params.id +
    "'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ status: 200, error: null, response: results, data: req.body });
  });
});
// delete
app.delete("/users/:id", (req, res) => {
  let sql = "DELETE FROM users WHERE username='" + req.params.id + "'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({
      status: 200,
      message: "Data berhasil dihapus",
      response: results,
    });
  });
});
// tabel user - end

app.listen(port, () => {
  console.log("cli-nodesjs-api listening at http://localhost:${port}");
});

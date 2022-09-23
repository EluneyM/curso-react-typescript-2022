import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "db",
  user: "admin",
  password: "admin123",
  database: "bookstore"
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json("Request nuevo valor");
});

app.get('/books', (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  });
});

app.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const query = "SELECT * FROM books WHERE id = ?";
  db.query(query, [bookId], (err, data)=>{
    if(err) return res.json(err);
    return res.json(data);
  });
});

app.post('/books', (req, res) => {
  const query = "INSERT INTO books (`title`,`description`,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover
  ];
  db.query(query, [values], (err, data) => {
    if(err) return res.json(err);
    return res.json("Book has been created successfully");
  });
});

app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const query = "UPDATE books SET `title` = ?, `description` = ?, `cover` = ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
  ];
  db.query(query, [...values, bookId], (err, data)=>{
    if(err) return res.json(err);
    return res.json("Book has been updated successfully");
  });
});

app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const query = "DELETE FROM books WHERE id = ?";
  db.query(query, [bookId], (err, data)=>{
    if(err) return res.json(err);
    return res.json("Book has been deleted successfully");
  });
});

app.listen(8800, ()=>{
  console.log("Conected to backend!");
})

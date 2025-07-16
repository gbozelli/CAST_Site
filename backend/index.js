const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Banco de dados SQLite
const db = new sqlite3.Database('./database.db');

// Criação das tabelas
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS research (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    authors TEXT,
    department TEXT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    department TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// Fake login
const fakeUser = {
  email: 'prof@teste.com',
  password: '123456'
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === fakeUser.email && password === fakeUser.password) {
    res.status(200).json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ message: 'Email ou senha inválidos' });
  }
});

// Rota para adicionar pesquisa
app.post('/add-research', (req, res) => {
  const { title, authors, department, description } = req.body;
  db.run(
    `INSERT INTO research (title, authors, department, description) VALUES (?, ?, ?, ?)`,
    [title, authors, department, description],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro ao salvar pesquisa' });
      }
      res.status(200).json({ message: 'Pesquisa salva com sucesso' });
    }
  );
});

// Rota para adicionar notícia
app.post('/add-news', (req, res) => {
  const { title, content, department } = req.body;
  db.run(
    `INSERT INTO news (title, content, department) VALUES (?, ?, ?)`,
    [title, content, department],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro ao salvar notícia' });
      }
      res.status(200).json({ message: 'Notícia salva com sucesso' });
    }
  );
});

// Rota para buscar pesquisas por departamento
app.get('/research/:department', (req, res) => {
  const { department } = req.params;
  db.all(`SELECT * FROM research WHERE department = ?`, [department], (err, rows) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar pesquisas' });
    res.json(rows);
  });
});

// Rota para buscar notícias por departamento
app.get('/news/:department', (req, res) => {
  const { department } = req.params;
  db.all(`SELECT * FROM news WHERE department = ?`, [department], (err, rows) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar notícias' });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

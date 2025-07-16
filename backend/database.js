const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./meubanco.db');

// Criação da tabela (se não existir)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS research (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    authors TEXT,
    department TEXT,
    description TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    department TEXT
  )`);
});

module.exports = db;

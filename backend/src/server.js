const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, '../../database/cidade_limpa.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS occurrences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      citizen_name TEXT NOT NULL,
      type TEXT NOT NULL,
      description TEXT NOT NULL,
      location TEXT NOT NULL,
      status TEXT DEFAULT 'Aberta',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    project: 'Cidade Limpa',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/occurrences', (req, res) => {
  const { citizen_name, type, description, location } = req.body;

  if (!citizen_name || !type || !description || !location) {
    return res.status(400).json({
      error: true,
      message: 'Todos os campos são obrigatórios.'
    });
  }

  const sql = `
    INSERT INTO occurrences (citizen_name, type, description, location)
    VALUES (?, ?, ?, ?)
  `;

  db.run(sql, [citizen_name, type, description, location], function (err) {
    if (err) {
      return res.status(500).json({
        error: true,
        message: 'Erro ao cadastrar ocorrência.'
      });
    }

    res.status(201).json({
      id: this.lastID,
      citizen_name,
      type,
      description,
      location,
      status: 'Aberta'
    });
  });
});

app.get('/api/occurrences', (req, res) => {
  db.all('SELECT * FROM occurrences ORDER BY id DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        error: true,
        message: 'Erro ao listar ocorrências.'
      });
    }

    res.json(rows);
  });
});

app.patch('/api/occurrences/:id/status', (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const allowedStatus = ['Aberta', 'Em análise', 'Resolvida'];

  if (!allowedStatus.includes(status)) {
    return res.status(400).json({
      error: true,
      message: 'Status inválido.'
    });
  }

  db.run(
    'UPDATE occurrences SET status = ? WHERE id = ?',
    [status, id],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: true,
          message: 'Erro ao atualizar status.'
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          error: true,
          message: 'Ocorrência não encontrada.'
        });
      }

      res.json({
        message: 'Status atualizado com sucesso.',
        id,
        status
      });
    }
  );
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend Cidade Limpa rodando na porta ${PORT}`);
  });
}

module.exports = app;
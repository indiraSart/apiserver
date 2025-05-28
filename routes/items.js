// routes/items.js
const express = require('express');
const router = express.Router();

// Temp in-memory data
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' }
];

// GET /items
router.get('/', (req, res) => {
  res.json(items);
});

// POST /items
router.post('/', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

// DELETE /items/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(item => item.id !== id);
  res.status(204).end();
});

module.exports = router;

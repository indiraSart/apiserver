const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger); // custom logging middleware

// Routes
app.get('/status', (req, res) => {
  res.json({ status: "ok" });
});
app.use('/items', itemsRouter);

// Start server
const PORT = 80; // change to 3000 locally if not running as root
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

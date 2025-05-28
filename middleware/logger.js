const fs = require('fs');
const path = require('path');

const logFile = '/var/logs/log.txt'; // Use './log.txt' locally if /var/logs isn't mounted

module.exports = (req, res, next) => {
  const logEntry = `${new Date().toLocaleDateString('no-NO')} - ${req.originalUrl}\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error('Failed to write log:', err);
  });

  next();
};

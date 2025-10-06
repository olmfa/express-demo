const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <h1> Express працює на Vercel!</h1>
    <p>Твоя IP-адреса: ${req.headers['x-forwarded-for'] || req.ip}</p>
    <p>Маршрут: /api/server.js</p>
  `);
});

module.exports = app;

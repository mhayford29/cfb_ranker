const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');
const db = require('../database/models')

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')))
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/rankings', (req, res) => {
  request(
    { url: 'https://api.collegefootballdata.com/rankings?year=2019&seasonType=regular' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

app.get('/teams', (req, res) => {
  request(
    { url: `https://api.collegefootballdata.com/teams?conference=${req.query.conf}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
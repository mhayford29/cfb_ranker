const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../database/models');
const routes = require('./routes.js')

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')))
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(`${path.resolve(__dirname, '../client/dist')}`)
})

app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}`));
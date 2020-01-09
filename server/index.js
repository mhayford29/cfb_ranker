const express = require('express');
const path = require('path');
const parser = require('body-parser');
const routes = require('./routes.js');
const { isValidDay, getWeekNumber } = require('../dateFunctions');
require('../database/models');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')))
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/date', (req, res) => {
  var weekNumber = getWeekNumber();
  var validDay = isValidDay();
  res.status(200).send({ weekNumber, validDay })
})

app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}`));
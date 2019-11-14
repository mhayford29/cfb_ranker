const express = require('express');
const path = require('path');
const parser = require('body-parser');
const routes = require('./routes.js');
require('../database/models');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')))
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if(err){
      res.status(400).send(err)
    }
  })
})


app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}`));
const model = require('../database/models')
require('mongoose');

module.exports = {
  get: (req, res) => {
    var school = req.query;
    model.GameIds.find(school)
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}
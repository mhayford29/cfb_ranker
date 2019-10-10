const model = require('../database/models')
require('mongoose');

module.exports = {
  get: (req, res) => {
    var school = req.query;
    model.GameIds.aggregate([
      { $match: school },
      { $lookup: {
        from: "test",
        localField: "gameIds",
        foreignField: "id",
        as: "game_data"
      }}
    ])
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  }
}


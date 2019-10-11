const model = require('../database/models')
require('mongoose');

module.exports = {
  get: (req, res) => {
    const { query } = req
    model.GameIds.aggregate([
      { $match: query },
      { $lookup: {
          from: "test",
          localField: "gameIds",
          foreignField: "id",
          as: "game_data"
      }},
      { $project: { 
        "game_data.data.boxscore.teams": 1,
        "game_data.data.scoringPlays": 1,
        "location": 1,
        "name": 1,
        "schoolId": 1 ,
        "stats": 1,
        "color": 1,
        "alternateColor": 1,
        "logos": 1,
        "school": 1
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


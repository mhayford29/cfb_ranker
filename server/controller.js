const model = require('../database/models')
require('mongoose');

module.exports = {
  teams: {
    get: (req, res) => {
      const { query } = req
      model.GameIds.aggregate([
        { $match: query },
        { $lookup: {
            from: "gamedatas",
            localField: "gameIds",
            foreignField: "id",
            as: "game_data"
        }},
        { $project: { 
          "game_data.week": 1,
          "game_data.data.boxscore.teams": 1,
          "game_data.data.scoringPlays": 1,
          "location": 1,
          "name": 1,
          "schoolId": 1 ,
          "stats": 1,
          "color": 1,
          "alternateColor": 1,
          "logos": 1,
          "school": 1,
          "gameIds": 1
        }}
      ])
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(400).send(err)
      })
    }
  },

  userPolls: {
    get: (req, res) => {
      const { query } = req
      model.UserPolls.find(query)
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(400).send(err)
      })
    },
    post: (req, res) => {
      const { email, year} = req.body
      model.UserPolls.create({
        email: email,
        year: year
      })
      .then(() => {
        res.status(200).send('successfully created entry')
      })
      .catch(err => {
        res.status(400).send(err)
      })
    },
    patch: (req, res) => {
      const { email, year, week, poll } = req.body
      model.UserPolls.updateOne({
        email: email,
        year: year,
        week: week
      }, {
        poll: poll
      }, { upsert: true })
      .then(() => {
        res.status(200).send('successfully created/updated entry')
      })
      .catch(err => {
        res.status(400).send(err)
      })
    },
    delete: (req, res) => {
      model.UserPolls.deleteMany()
      .then(() => {
        res.status(200).send('deleted everything')
      })
      .catch(err => {
        res.status(400).send('error deleting everything')
      })
    }
  }
}


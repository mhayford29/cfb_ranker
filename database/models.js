const db = require('./index');
const mongoose = require('mongoose');
var Schema = mongoose.Schema

var gameIdsSchema = new Schema({
  schoolId: Number,
  school: String,
  gameIds: [String],
  color: String,
  alternateColor: String,
  name: String,
  location: String,
  logos: [String],
  stats: [{ name: String, value: Number }]
}, {strict: 'false'})

var standingsSchema = new Schema({
  test: {}
})

var GameIds = mongoose.model('GameIds', gameIdsSchema);
var Standings = mongoose.model('Standings', standingsSchema);

module.exports = {
  GameIds,
  Standings
};
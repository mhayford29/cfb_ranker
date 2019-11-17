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
}, { strict: 'false' })

var gameDataSchema = new Schema({
  id: String,
  week: Number, 
  data: {}
}, { strict: 'false' })

var userPollsSchema = new Schema({
  email: String,
  year: Number,
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
  10: {},
  11: {},
  12: {},
  13: {},
  14: {},
  15: {},
  final: {}
}, { strict: 'false' })

var UserPolls = mongoose.model('UserPolls', userPollsSchema);
var GameIds = mongoose.model('GameIds', gameIdsSchema);
var GameData = mongoose.model('GameData', gameDataSchema);

module.exports = {
  UserPolls,
  GameIds,
  GameData
};
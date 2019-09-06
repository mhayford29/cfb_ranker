const db = require('./index');
const mongoose = require('mongoose');
var Schema = mongoose.Schema

var gameIdsSchema = new Schema({
  schoolId: Number,
  school: String,
  gameIds: [String]
}, {strict: 'false'})

var GameIds = mongoose.model('GameIds', gameIdsSchema);
module.exports = GameIds;
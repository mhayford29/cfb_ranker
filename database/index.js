const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cfb_ranker', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection to mongo successful')
});

module.exports = db;
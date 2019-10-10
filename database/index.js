const mongoose = require('mongoose');
const password = require('../config');

//mongoose.connect('mongodb://localhost/cfb_ranker', {useNewUrlParser: true});
mongoose.connect(`mongodb+srv://mhayford29:${password}@cluster0-fu2nf.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection to mongo successful')
});

module.exports = db;
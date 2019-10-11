const mongoose = require('mongoose');
const PASSWORD = process.env.PASSWORD || require('../config');

//mongoose.connect('mongodb://localhost/cfb_ranker', {useNewUrlParser: true});
if(process.env.PASSWORD){
  mongoose.connect(`mongodb+srv://mhayford29:${process.env.PASSWORD}@cluster0-fu2nf.mongodb.net/cfb_ranker?retryWrites=true&w=majority`, {useNewUrlParser: true});
} else{
  mongoose.connect(`mongodb+srv://mhayford29:${PASSWORD}@cluster0-fu2nf.mongodb.net/cfb_ranker?retryWrites=true&w=majority`, {useNewUrlParser: true});
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection to mongo successful')
});

module.exports = db;
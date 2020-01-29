const mongoose = require('mongoose');

const DATABASE_CONNECTION = 'mongodb://db/test';

mongoose.connect(DATABASE_CONNECTION, { useNewUrlParser: true });

const db = mongoose.connection;
db.once('open', () => console.log('connection open'));
db.on('error', () => console.error.bind(console, 'connection error'));

// var kittySchema = mongoose.Schema({
// name: String});
//
// Kitten = exports.Kitten = mongoose.model('Kitten', kittySchema);
//
// exports.initializeMongo = function() {
//   mongoose.connect(DATABASE_CONNECTION, { useNewUrlParser: true });
//
//   console.log('trying to connect to ' + DATABASE_CONNECTION);
//
//   var db = mongoose.connection;
//   db.on('error', console.error.bind(console, 'connection error: We might not be as connected as I thought'));
//   db.once('open', function() {
//     console.log('we are connected to you and I!');
//     addRandomCat();
//   });
// }
//
// var addRandomCat = function() {
//   var silence = new Kitten({
//     name: 'Silence' + Math.random()
//   });
//
//   silence.save(function (err, fluffy) {
//     if (err) return console.log(err);
//     console.log('there is a new random cat in the neighborhood');
//   });
// }

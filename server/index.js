const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./database');
db.initializeMongo();
const faker = require('faker');

const mongoose = require('mongoose');

console.log('test');
const router = require('./router');
const app = express();
const port = 7000;

app.use(cors());

console.log(faker.image.people);

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/cars', router);
console.log('tsetse');
app.get('/', function(req, res) {
  return res.send('api test');
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));



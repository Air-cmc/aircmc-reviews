const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const { Review, Rating } = require('../Database/Review.js');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/review/', (req, res) => {
  Review.find({})
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

app.get('/rating/:id', (req, res) => {
  Rating.findOne({id: req.params.id})
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

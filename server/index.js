const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const { Review, Rating } = require('../database/Review.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/review', (req, res) => {
  Review.find({})
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

app.get('/rating', (req, res) => {
  Rating.find({})
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

app.post('/reviews', (req, res) => {

});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

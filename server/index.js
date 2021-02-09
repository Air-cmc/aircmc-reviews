require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const db = require('../Database');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/review/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM reviews WHERE listing_id = $1', [id]);

    if (result.rowCount > 0) {
      const reviews = [];

      for (review of result.rows) {
        reviews.push({review});
      }

      res.status(200);
      res.send(reviews);
    } else {
      res.status(200).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.get('/rating/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM ratings WHERE listing_id = $1', [id]);

    if (result.rowCount > 0) {
      const r = result.rows[0];
      const rating = {
        starReview: {
          1: r['1_stars'],
          2: r['2_stars'],
          3: r['3_stars'],
          4: r['4_stars'],
          5: r['5_stars'],
        },
        starOptions: {
          Cleanliness: r.cleanliness,
          Communication: r.communication,
          CheckIn: r.checkin,
          Accuracy: r.accuracy,
          Location: r.location,
          Value: r.value,
        },
        options: {
          comfortableBeds: r.comfortable_beds,
          responsiveHost: r.responsive_host,
          greatLocation: r.great_location,
          greatViews: r.great_views,
          easyCheckIn: r.easy_checkin,
          greatRestaurants: r.great_restaurants,
          centralLocation: r.central_location,
        },
      }
      res.status(200).send(rating);
    } else {
      res.status(200).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

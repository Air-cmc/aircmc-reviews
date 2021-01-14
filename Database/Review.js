const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

console.log('Mongo Connection: ', mongoose.connection.readyState);

const ratingSchema = new mongoose.Schema({
  hostName: String,
  starReview: {
    one: {type: Number, default: 0},
    two: {type: Number, default: 0},
    three: {type: Number, default: 0},
    four: {type: Number, default: 0},
    five: {type: Number, default: 0}
  },
  options: {
    comfortableBeds: {type: Number, default: 0},
    responsiveHost: {type: Number, default: 0},
    greatLocation: {type: Number, default: 0},
    greatViews: {type: Number, default: 0},
    easyCheckIn: {type: Number, default: 0},
    greatRestaurants: {type: Number, default: 0},
    centralLocation: {type: Number, default: 0}
  }
});

const reviewSchema = new mongoose.Schema({
  host: String,
  review: {
    name: String,
    body: {type: String, max: 500},
    // eslint-disable-next-line camelcase
    created_at: {type: Date, required: true, default: Date.now}
  }
});


const Rating = mongoose.model('Rating', ratingSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports.Rating = Rating;
module.exports.Review = Review;
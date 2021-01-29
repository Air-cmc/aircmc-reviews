const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

console.log('Mongo Connection: ', mongoose.connection.readyState);

const ratingSchema = new mongoose.Schema({
  hostName: String,
  starReview: {
    1: {type: Number, default: 0},
    2: {type: Number, default: 0},
    3: {type: Number, default: 0},
    4: {type: Number, default: 0},
    5: {type: Number, default: 0}
  },
  starOptions: {
    Cleanliness: Number,
    Communication: Number,
    CheckIn: Number,
    Accuracy: Number,
    Location: Number,
    Value: Number
  },
  options: {
    comfortableBeds: {type: Number, default: 0},
    responsiveHost: {type: Number, default: 0},
    greatLocation: {type: Number, default: 0},
    greatViews: {type: Number, default: 0},
    easyCheckIn: {type: Number, default: 0},
    greatRestaurants: {type: Number, default: 0},
    centralLocation: {type: Number, default: 0}
  },
  id: [Number],
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
const path = require('path');
const fs = require('fs');
const { Readable } = require('stream');
const argv = require('yargs').argv;
const generator = require('./generator');

const recordsCount = argv.records || 10;

const ratingFilename = 'ratings.csv';
const reviewFilename = 'reviews.csv';

const headerFromObject = obj => Object.keys(obj).join(',') + '\n';
const rowFromObject = obj => Object.values(obj).join(',') + '\n';

class GeneratorStream extends Readable {
  constructor (count, fn) {
    super();

    this.counter = 0;
    this.max = count;
    this.fn = fn;
  }

  _read () {
    if (this.counter < this.max) {
      this.push(this.fn(this.counter));
      this.counter += 1;
    } else {
      this.push(null);
    }
  }
}

const ratingsReadStream = new GeneratorStream(recordsCount, (counter) => {
  let s = '';
  const rating = generator.rating(recordsCount);
  if (counter === 0) {
    s += 'listing_id,' + headerFromObject(rating);
  }
  s += `${counter},` + rowFromObject(rating);
  return s;
});


const reviewsWriteStream = fs.createWriteStream('reviews.csv');

const reviewsReadStream = new GeneratorStream(recordsCount, (counter) => {
  let s = '';
  let rand = Math.floor(Math.random() * 10);

  if (counter === 0) {
    s += 'listing_id,' + headerFromObject(generator.review());
  }

  for (let i = 0; i < rand; i++) {
    s += `${counter},` + rowFromObject(generator.review());
  }

  return s;
});

ratingsReadStream.pipe(fs.createWriteStream(path.resolve(__dirname, './ratings.csv')));
reviewsReadStream.pipe(fs.createWriteStream(path.resolve(__dirname, './reviews.csv')));

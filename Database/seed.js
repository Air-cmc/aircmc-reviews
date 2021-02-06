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

let reviewsCount = 0;

const reviewsReadStream = new GeneratorStream(recordsCount, (counter) => {
  let s = '';
  let rand = Math.floor(Math.random() * 10);

  if (counter === 0) {
    s += 'listing_id,' + headerFromObject(generator.review());
  }

  for (let i = 0; i < rand; i++) {
    s += `${counter},` + rowFromObject(generator.review());
    reviewsCount++;
  }

  return s;
});

writeRatings = () => {
  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(path.resolve(__dirname, './ratings.csv'));

    ratingsReadStream.pipe(writeStream);

    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
};

writeReviews = () => {
  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(path.resolve(__dirname, './reviews.csv'));

    reviewsReadStream.pipe(writeStream);

    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
};


(async function writeAll () {
  console.info(`Generating ${recordsCount.toLocaleString()} primary records...`);

  let tstart = process.hrtime();
  await writeRatings();
  let tend = process.hrtime(tstart);

  console.info(`Generated ${recordsCount.toLocaleString()} primary records in  %ds %dms`, tend[0], tend[1] / 1000000);

  console.info(`Generating secondary records...`);

  tstart = process.hrtime();
  await writeReviews();
  tend = process.hrtime(tstart);

  console.info(`Generated ${reviewsCount.toLocaleString()} secondary records in  %ds %dms`, tend[0], tend[1] / 1000000);
})();

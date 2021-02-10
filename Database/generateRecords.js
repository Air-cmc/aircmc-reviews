const path = require('path');
const fs = require('fs');
const { Readable } = require('stream');
const argv = require('yargs').argv;
const generator = require('./generator');

const recordsCount = argv.records || 10;

const ratingFilename = 'ratings.csv';
const reviewFilename = 'reviews.csv';

const delimiter = '|';

const headerFromObject = obj => Object.keys(obj).join(delimiter) + '\n';
const rowFromObject = obj => Object.values(obj).join(delimiter) + '\n';

class GeneratorStream extends Readable {
  constructor (count, fn) {
    super();

    this.counter = 0;
    this.max = count;
    this.fn = fn;
  }

  _read () {
    if (this.counter < this.max) {
      this.counter += 1;
      this.push(this.fn(this.counter));
    } else {
      this.push(null);
    }
  }
}

const ratingsReadStream = new GeneratorStream(recordsCount, (counter) => {
  return rowFromObject(generator.rating(counter, counter, recordsCount))
});

let reviewsCount = 0;

const reviewsReadStream = new GeneratorStream(recordsCount, (counter) => {
  let s = '';
  let rand = Math.floor(Math.random() * 10);

  for (let i = 0; i < rand; i++) {
    reviewsCount++;
    s += rowFromObject(generator.review(reviewsCount, counter));
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
  try {
    await writeRatings();
  } catch (err) {
    console.log(err);
    return;
  }
  let tend = process.hrtime(tstart);

  console.info(`Generated ${recordsCount.toLocaleString()} primary records in  %ds %dms`, tend[0], tend[1] / 1000000);

  console.info(`Generating secondary records...`);

  tstart = process.hrtime();
  try {
    await writeReviews();
  } catch (err) {
    console.log(err);
    return;
  }
  tend = process.hrtime(tstart);

  console.info(`Generated ${reviewsCount.toLocaleString()} secondary records in  %ds %dms`, tend[0], tend[1] / 1000000);
})();

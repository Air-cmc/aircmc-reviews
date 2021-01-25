const mongoose = require('mongoose');

const mongoUri = process.env.MONGOURL || 'mongodb://localhost/reviews';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
module.exports = db;

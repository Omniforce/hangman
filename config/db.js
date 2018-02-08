const nconf = require('nconf');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

var connectionString = nconf.get('MONGO_URL');
if (process.env.MONGODB_URI) {
  connectionString = process.env.MONGODB_URI;
}

mongoose.connect(connectionString, { useMongoClient: true });

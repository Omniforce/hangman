const nconf = require('nconf');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect(nconf.get('MONGO_URL'), { useMongoClient: true });

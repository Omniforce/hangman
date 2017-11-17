const fs = require('fs');
const nconf = require('nconf');

if ( typeof process.env.NODE_ENV === 'undefined' ) {
  process.env.NODE_ENV = 'development'
}

const DEFAULT_CONFIG  = './config/defaults.json';

nconf
  .argv()
  .env()
  .file('defaults', DEFAULT_CONFIG);

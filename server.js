const express = require('express');
const session = require('express-session');
const nconf = require('nconf');

require('./config/initialize');
require('./config/db');

const app = express();

app.set('trust proxy', 1);
app.use(session({
  secret: nconf.get('SESSION_SECRET'),
  resave: false,
  saveUninitialized: true
}));

const games = require('./routes/games');
app.use('/game', games);

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

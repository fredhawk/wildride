const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const passport = require('passport');
const promisify = require('es6-promisify');
const expressValidator = require('express-validator');
const keys = require('./config/keys');

mongoose.connect(keys.DATABASE, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  console.error(`Error 🙅 🚫 →  ${err.message}`);
});
require('./models/User');
require('./models/Meet');
require('./handlers/passport');

const routes = require('./routes/index');
const app = express();
const PORT = keys.PORT || 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(expressValidator());

app.use(cors());

// Need cookie stuff here
app.use(
  session({
    secret: keys.SECRET,
    key: keys.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
// // Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

// promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

app.use(`/`, routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const server = app.listen(PORT, () => {
  console.log('Listening on port %d in %s mode', server.address().port, app.settings.env);
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  console.error(`Error 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 →  ${err.message}`);
});
require('./models/User');
require('./models/Job');

const routes = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

app.use(`/`, routes);

const server = app.listen(PORT, () => {
  console.log('Listening on port %d in %s mode', server.address().port, app.settings.env);
});

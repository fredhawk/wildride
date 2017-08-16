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
// app.options('/register', cors());
// app.post('/register', cors(), (req, res) => {
//   console.log(req.body);
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   console.log('Received post: %s %s %s', name, email, password);
//   res.send('got it!');
// });

const server = app.listen(PORT, () => {
  console.log('Listening on port %d in %s mode', server.address().port, app.settings.env);
});

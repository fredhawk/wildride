const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get(`/`, (res, req) => {
  res.send(`Hey there`);
});

const server = app.listen(PORT, () => {
  console.log('Listening on port %d in %s mode', server.address().port, app.settings.env);
});

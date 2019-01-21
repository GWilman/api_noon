const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.plugin(require('./lib/globalToJSON'));

const bodyParser = require('body-parser');
const { port, dbURI } = require('./config/env');
const routes = require('./config/routes');
const customResponses = require('./lib/custom_responses');

mongoose.set('useCreateIndex', true); // stops deprecation warning in mongoose ^5.3.1
mongoose.connect(dbURI, { useNewUrlParser: true });

app.use(bodyParser.json());

app.use(customResponses);
app.use(routes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

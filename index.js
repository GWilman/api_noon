const express = require('express');
const cors = require('cors');
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

// CORS config
const whitelist = ['http://localhost:3000']; // add allowed domains
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(customResponses);
app.use(routes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

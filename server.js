'use strict';

// Bring in express and create an instance of the router - to be used w/ middleware
const express = require('express');
const app = express();
const router = new express.Router();
const bodyParser = require('body-parser');
const https = require('https');

// Used to barse the request body as json
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Allow CORS request for local host interactions
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


if (process.env.NODE_ENV !== 'production') {
    // Load in configs from your .env file
    require('dotenv').config();

}


// Set our port
app.set('port', process.env.PORT || 5001);

// Listen for requests
const server = app.listen(app.get('port'), () => {
    const port = server.address().port;
    console.info(`Magic happens on port ${port}`);
});

// Bring in the routes
const api = require('./api/send');

// Tell the app to use the routes with /api prefix
app.use('/api', api);

// Little hack to ping heroku every so often
setInterval(function() {
    https.get(process.env.HEROKU_URL);
    console.log('pinggggged');
}, 300000); // every 5 minutes (300000)

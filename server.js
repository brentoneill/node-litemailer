'use strict';

// Load in configs from your .env file
require('dotenv').config();

// Bring in express and create an instance of the router - to be used w/ middleware
const express = require('express');
const app = express();
const router = new express.Router();
const bodyParser = require('body-parser');
const https = require('https');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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

'use strict';

const express = require('express');
var User = require('./db').User

// Constants
const PORT = 8080;
const HOST = '0.0.0.0'

// App
const app = express();
app.get('/', (req, res) => {

});

app.get('/users', (req, res) => {
  User.find({}, function (err, users) {
    res.json(users)
  })
});

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
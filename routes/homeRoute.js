const express = require('express');
const router = express.Router();
const User = require('../models/data')

const client = require('../dbConnection');

router.get('/', function(req, res) {
  // res.sendFile('./views/homepage.html', {root: __dirname});
  // RENDER the mustache template in views/
  User.findAll((data) => {
    res.render('../views/homepage', {users : data});
  });
});

router.get('/employed', function(req, res) {
    User.findAllEmployed((data) => {
      res.render('../views/homepage', { users: data });
    });
})

router.get('/unemployed', function(req, res) {
    User.findAllUnemployed((data) => {
      res.render('../views/homepage', { users: data });
    });
})



module.exports = router;

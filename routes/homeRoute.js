const express = require('express');
const router = express.Router();
const User = require('../models/data')

router.get('/', function(req, res) {
  // res.sendFile('./views/homepage.html', {root: __dirname});
  // RENDER the mustache template in views/
  res.render('../views/homepage', {users : User.all});
})

module.exports = router;

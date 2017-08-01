const express = require('express');
const router = express.Router();
const User = require('../models/data')


router.get('/:id', function(req, res) {
    let foundUser = User.getUserById(req.params.id);
  res.render('../views/userpage', { users: [foundUser] });
})

module.exports = router;

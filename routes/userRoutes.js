const express = require('express');
const router = express.Router();
const User = require('../models/data')


router.get('/:id', function(req, res) {
    User.getUserById(parseInt(req.params.id), (data) => {
      res.render('../views/userpage', { users: data });
    });
})

module.exports = router;

const { Router } = require('express');
const User = require('../models').user;

const router = new Router();

// GET all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

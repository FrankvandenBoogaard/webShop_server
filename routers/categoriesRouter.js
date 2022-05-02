const { Router } = require('express');
const Category = require('../models').category;

const router = new Router();

// GET all categories
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

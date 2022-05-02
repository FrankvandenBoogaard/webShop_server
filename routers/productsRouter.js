const { Router } = require('express');
const Product = require('../models').product;
const Category = require('../models').category;

const router = new Router();

// GET -all- products with categories
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({ include: [Category] });
    res.send(products);
  } catch (e) {
    next(e);
  }
});

// GET -specific- product with it's category
router.get('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id, { include: [Category] });
    res.send(product);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

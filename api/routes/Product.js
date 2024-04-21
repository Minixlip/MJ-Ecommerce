const express = require('express');

const { addProduct } = require('../controllers/productController');

const router = express.Router();

// Product Route
router.post('/add', addProduct);

module.exports = router;

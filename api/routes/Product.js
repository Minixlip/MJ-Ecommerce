const express = require('express');

const { addProduct, getProducts } = require('../controllers/productController');

const router = express.Router();

// Product Route //

// Add product
router.post('/add', addProduct);

// Get all Products
router.post('/fetch', getProducts);

module.exports = router;

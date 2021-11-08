// Routes to products
const express = require('express');
const router = express.Router();
const productController = require ('../controllers/products.controller')

// API - Products
router.post('/', productController.createProduct);

module.exports = router
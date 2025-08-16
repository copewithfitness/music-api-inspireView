// albumRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/albumController'); // no need to rename file

// Match the expected endpoints from React front-end
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;

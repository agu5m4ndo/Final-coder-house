const express = require('express');
const router = express.Router();
const {
    getOneProduct,
    getAllProducts,
    postProduct,
    deleteProduct,
    editProduct
} = require('../controllers/products')

const auth = require('../middleware/auth');

router.route('/').get(getAllProducts).post(auth, postProduct);
router.route('/:code').get(getOneProduct).delete(auth, deleteProduct).put(auth, editProduct);

module.exports = router;
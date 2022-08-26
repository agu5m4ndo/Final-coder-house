const express = require('express');
const router = express.Router();
const {
    createCart,
    deleteCart,
    getCartProducts,
    addToCart,
    removeFromCart
} = require('../controllers/cart')

router.route('/').post(createCart);
router.route('/:id').delete(deleteCart);
router.route('/:id/productos').get(getCartProducts);
router.route('/:id/productos/:id_prod').delete(removeFromCart).post(addToCart);

module.exports = router;
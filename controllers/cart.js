const { daoCarritos } = require('../src/daos/index');
const { daoProductos } = require('../src/daos/index'); //me permite obtener información del dao ya creado sin correr riesgos de dependencias circulares

const createCart = async(req, res) => {
    await daoCarritos.createCart();
    res.status(201).json({ success: 'true' /*id: carrito.id*/ });
}

const deleteCart = async(req, res) => {
    await daoCarritos.delete(Number(req.params['id']));
    res.status(204).json({ success: 'true' })
}

const getCartProducts = async(req, res) => {
    const list = await daoCarritos.getCartProducts(Number(req.params['id']));
    res.status(200).json({ result: list });
}

const addToCart = async(req, res) => {
    const product = await daoProductos.getByCode(req.params['prod_code'])
    await daoCarritos.addToCart(Number(req.params['id']), product)
    res.status(200).json({ success: 'true' })
}

const removeFromCart = async(req, res) => {
    await daoCarritos.removeFromCart(Number(req.params['id']), Number(req.params['prod_code']))
    res.status(200).json({ success: 'true' })
}

module.exports = {
    createCart,
    deleteCart,
    getCartProducts,
    addToCart,
    removeFromCart
};
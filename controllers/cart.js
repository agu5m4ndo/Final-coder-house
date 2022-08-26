const Cart = require('../src/cart');
const Container = require('../src/contenedores/ContenedorMemoriaArchivo');
const fsCart = new Container("carrito.txt");
const { fsProduct } = require('../controllers/products') //Esto me sirve para acceder a la instancia de fileSystem que tiene el array de productos
    // const carrito = new Cart();

const createCart = (req, res) => {
    const carrito = new Cart();
    fsCart.save(carrito);
    res.status(201).json({ id: carrito.id });
}

const deleteCart = (req, res) => {
    const cart = fsCart.getById(Number(req.params['id']))
    if (cart == null) return errorHandling(res, "Carrito");
    fsCart.deleteById(Number(req.params['id']));
    res.status(204).json({ success: 'true' })
}

const getCartProducts = (req, res) => {
    const cart = fsCart.getById(Number(req.params['id']))
    if (cart == null) return errorHandling(res, "Carrito");
    res.status(200).json({ result: cart[0].productos });
}

const addToCart = (req, res) => {
    const cart = fsCart.getById(Number(req.params['id']))
    if (cart == null) return errorHandling(res, "Carrito");
    const product = fsProduct.getById(Number(req.params['id_prod']))
    if (product == null) return errorHandling(res, "Producto");
    cart[0].addProduct(product[0])
    fsCart.update(Number(req.params['id']))
    res.status(200).json({ success: 'true' })
}

const removeFromCart = (req, res) => {
    const cart = fsCart.getById(Number(req.params['id']))
    if (cart == null) return errorHandling(res, "Carrito");
    cart[0].removeProduct(Number(req.params['id_prod']))
    res.status(200).json({ success: 'true' })
}

const errorHandling = (res, target) => {
    res.status(404).json({ error: `${target} no encontrado` })
}

module.exports = {
    createCart,
    deleteCart,
    getCartProducts,
    addToCart,
    removeFromCart
};
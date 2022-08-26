const Container = require('../src/contenedores/ContenedorMemoriaArchivo');
const Product = require('../src/product')
const fsProduct = new Container('productos.txt');

const getOneProduct = (req, res) => {
    const result = fsProduct.getById(Number(req.params['id']))
    if (result == null) return errorHandling(res);
    res.status(200).json({ result });
}

const getAllProducts = (req, res) => {
    res.status(200).json({ result: fsProduct.getAll() });
}

const postProduct = (req, res) => {
    const attr = req.body; //Guardo los atributos para crear un producto
    fsProduct.save(new Product(attr.name, attr.description, attr.code, attr.thumbnail, attr.price, attr.stock))
    res.status(201).json({ success: 'true' });
}

const editProduct = (req, res) => {
    const product = fsProduct.getById(Number(req.params['id']))
    if (product[0] == null) return errorHandling(res);
    const attr = req.body;
    product[0].name = attr.name;
    product[0].description = attr.description;
    product[0].code = attr.code;
    product[0].thumbnail = attr.thumbnail;
    product[0].price = attr.price;
    product[0].stock = attr.stock;
    fsProduct.update(Number(req.params['id']));
    res.status(200).json({ success: 'true' });
}

const deleteProduct = (req, res) => {
    const result = fsProduct.getById(Number(req.params['id']))
    if (result[0] == null) return errorHandling(res);
    fsProduct.deleteById(Number(req.params['id']))
    res.status(201).json({ success: 'true' })
}

const errorHandling = (res) => {
    res.status(404).json({ error: 'Producto no encontrado' })
}

module.exports = {
    getAllProducts,
    getOneProduct,
    postProduct,
    editProduct,
    deleteProduct,
    fsProduct
};
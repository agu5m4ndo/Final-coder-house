const { daoProductos } = require('../src/daos/index');

const getOneProduct = async(req, res) => {
    const result = await daoProductos.getByCode(req.params['code']);
    res.status(200).json({ result });
}

const getAllProducts = async(req, res) => {
    res.status(200).json({ result: await daoProductos.getAll() });
}

const postProduct = async(req, res) => {
    const attr = req.body;
    await daoProductos.createProduct(attr.name, attr.description, attr.code, attr.thumbnail, attr.price, attr.stock);
    res.status(201).json({ success: 'true' });
}

const editProduct = async(req, res) => {
    const product = await daoProductos.getByCode(req.params['code'])
    console.log(product)
    const attr = req.body;
    product.name = attr.name;
    product.description = attr.description;
    // product.code = attr.code; 
    product.thumbnail = attr.thumbnail;
    product.price = attr.price;
    product.stock = attr.stock;
    daoProductos.update(product);
    res.status(200).json({ success: 'true' });
}

const deleteProduct = async(req, res) => {
    await daoProductos.deleteProduct(req.params['code'])
    res.status(201).json({ success: 'true' })
}

module.exports = {
    getAllProducts,
    getOneProduct,
    postProduct,
    editProduct,
    deleteProduct
};
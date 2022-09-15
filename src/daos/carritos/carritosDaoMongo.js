const { default: mongoose } = require('mongoose');
const { carritos } = require('../../../models/carts');
const Cart = require('../../cart');
const ContenedorMongoDB = require('../../contenedores/ContenedorMongoDB');

class CarritosDaoMongo extends ContenedorMongoDB {
    constructor() {
        super(carritos);
        this.idValue = 1;
    }

    increaseId() {
        this.idValue++;
    }

    async createCart() {
        const newCart = new Cart();
        const object = new carritos({
            timestamp: newCart.timestamp,
            products: {},
            id: this.idValue
        })
        this.increaseId();
        await super.create(object)
    }

    async getCartProducts(id) {
        const cart = await super.getById(id)
        return cart.products;
    }
    async addToCart(id, product) {
        const cart = await super.getById(id);
        return await this.model.updateOne({ id: `${id}` }, { $push: { products: product } })
    }

    async removeFromCart(id, idProd) {
        const cart = await super.getById(id);
        const producto = cart.products.filter(prod => prod.id == idProd)
        const value = cart.products.indexOf(producto[0]);
        cart.products.splice(value, value + 1);
        return await this.model.updateOne({ id: `${id}` }, { $set: { products: cart.products } })
    }
}

module.exports = CarritosDaoMongo;
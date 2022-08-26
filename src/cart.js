class Cart {
    constructor() {
        this.timestamp = new Date().getTime();
        this.productos = []
    }
    addProduct(product) {
        this.productos.push(product);
    }
    findProduct(id) {
        const result = this.productos.filter(product => { return product.id === id })
        if (result[0]) return result[0];
        return null;
    }
    removeProduct(id) {
        if (this.findProduct(id)) this.productos.splice(id - 1, 1);
        return null;
    }
    getAllProducts() {
        return this.productos;
    }
}

module.exports = Cart
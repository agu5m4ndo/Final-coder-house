const mongoose = require('mongoose');

const productosCollection = 'productos';

const productosSchema = new mongoose.Schema({
    name: { type: String, require: true, max: 100 },
    description: { type: String, require: true, max: 100 },
    code: { type: String, require: true, max: 10 },
    thumnail: { type: String, require: true, max: 100 },
    price: { type: Number, require: true },
    stock: { type: Boolean, require: true },
    timestamp: { type: String, require: true, max: 100 }
})

export const productos = new mongoose.model(productosCollection, productosSchema);
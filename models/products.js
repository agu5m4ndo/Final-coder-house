const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema({
    name: { type: String, require: true, max: 100 },
    description: { type: String, require: true, max: 100 },
    code: { type: String, require: true, max: 10 },
    thumnail: { type: String, require: true, max: 100 },
    price: { type: Number, require: true },
    stock: { type: Boolean, require: true },
    timestamp: { type: String, require: true, max: 100 },
    id: { type: Number }
})

const productos = new mongoose.model('Products', productosSchema);

module.exports = { productos };
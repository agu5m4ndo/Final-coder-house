const express = require('express');
const app = express();
require('dotenv').config()
const productos = require('./routes/products')
const carrito = require('./routes/cart')
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/productos', productos);
app.use('/api/carrito', carrito);
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
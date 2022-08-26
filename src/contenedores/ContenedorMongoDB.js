import mongoose from 'mongoose';
import * as model from '../../models/products';

CRUD();

const CRUD = () => {
    try {
        const URL = 'mongodb://localhost:27017/ecommerce'
        let respuesta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada');
    } catch (error) {
        console.log('Se produjo un error con la base de datos ', error);
    }
}

const create = (object) => {
    console.log('Con')
}
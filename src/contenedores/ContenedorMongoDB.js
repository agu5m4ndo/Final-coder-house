const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://usuarioCoderhouse:coderhouse@nodeexpressproject.r8xsu.mongodb.net/Final-coderhouse?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log('Base de datos conectada a través de MongoDb');


class ContenedorMongo {
    constructor(model) {
        this.model = model;
    }

    async create(object) {
        try {
            await object.save()
        } catch (error) {
            console.log(error)
        }
    }

    async getAll() {
        try {
            return await this.model.find({});
        } catch (error) {
            console.log(error)
        }
    }

    async getById(id) {
        try {
            return await this.model.findOne({ id: `${id}` });
        } catch (error) {
            console.log(error)
        }
    }

    async update(id, differences) {
        try {
            console.log(differences)
            await this.model.updateOne({ id: `${id}` }, { $set: { differences } })
        } catch (error) {
            console.log(error)
        }
    }

    async delete(id) {
        try {
            await this.model.deleteOne(id)
        } catch (error) {
            console.log(error)

        }
    }
}

module.exports = ContenedorMongo;
const fs = require('fs');

class Contenedor {
    array = [];
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.idValue = 1;
    }

    increaseId = () => {
        this.idValue++;
    }

    save = async(object) => {
        object.id = this.idValue
        this.increaseId();
        this.array.push(object);
        try {
            await fs.promises.writeFile(`./${this.nombreArchivo}`, JSON.stringify(this.array, null, 2))
        } catch (error) {
            console.log(`Se ha producido un error al añadir el archivo, ${error}`);
        }
    }

    getById = (id) => { //ID es equivalente a la posición del objeto en el array +1
        if (this.array[id - 1]) {
            const result = this.array.filter(item => { return item.id === id })
            return result;
        }
        console.log(`No se ha encontrado un objeto con el id ${id}`);
        return null;
    }

    getAll = () => {
        try {
            return this.array;
        } catch (error) {
            console.log('Hubo un error al tratar de leer todos los objetos. ', error)
        }
    }

    update = async(id) => {
        try {
            if (this.array[id - 1]) {
                await fs.promises.writeFile(`./${this.nombreArchivo}`, JSON.stringify(this.array, null, 2))
            };

        } catch (error) {
            console.log(`Se ha producido un error al añadir el archivo, ${error}`);
        }
    }

    deleteById = async(id) => {
        try {
            if (this.array[id - 1]) {
                const remember = this.array[id - 1]; //Solamente existe para notificar la acción
                this.array.splice(id - 1, 1);
                await fs.promises.writeFile(`${this.nombreArchivo}`, JSON.stringify(this.array, null, 2));
                console.log(`El objeto "${remember.title}" ha sido eliminado`)
            } else {
                console.log(`No se pudo eliminar al objeto con id ${id}`);
            }
        } catch (error) {
            console.log(`No se ha encontrado el objeto con id ${id}`, error);
        }
    }

    deleteAll = async() => {
        await fs.promises.writeFile(`./${this.nombreArchivo}`, "");
        console.log('Todos los objetos han sido eliminados')
    }
}

module.exports = Contenedor;
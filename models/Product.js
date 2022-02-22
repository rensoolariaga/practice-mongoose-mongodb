// me traigo la clase Schema para definir los tipos de datos que va a recibir la db
// model es para el crud y crear un modelo a partir del esquema
const { Schema, model } = require('mongoose')


const productSchema = new Schema({
    name: {
        type: String   // en Mayusculas el tipo de dato (mongoose)
    },  
    description: String,
    price: {
        type: Number,
        default: 0  // si no me pasa el dato le seteo algo por defecto
    }
})

// nombre del modelo , schema definido
module.exports = model('product', productSchema)
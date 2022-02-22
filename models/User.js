// me traigo la clase Schema para definir los tipos de datos que va a recibir la db
// model es para el crud y crear un modelo a partir del esquema
const { Schema, model } = require('mongoose')


const UserSchema = new Schema({
    username: {
        type: String,   // en Mayusculas el tipo de dato (mongoose)
        unique: true,        // para que no se repita el date
        required: true       // para que la propiedad sea obligatoria
    },  
    password: String,
    date: {
        type: Date,
        default: new Date()  // si no me pasa el dato le seteo algo por defecto
    }
})

// nombre del modelo , schema definido
module.exports = model('user', UserSchema)
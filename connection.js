const mongoose = require('mongoose')

// //                   protocolo:// localhost : puerto por def. / nombre de base de datos(se crea)
// mongoose.connect('mongodb://127.0.0.1:27017/mongoose', { // configuraciones de la conexion
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
// )

/// alternativa
const mongooseMongoDB = 'mongodb://127.0.0.1:27017/mongoose'

// mongoose.connect(mongooseMongoDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// cuando se conecte a la base , no usa parametro
// mongoose.connection.on('open', _ => {
//     console.log('Db is connected to: ', mongooseMongoDB)
// })

// // cuando me tire error al conectarse , uso el parametro
// mongoose.connection.on('error', error => {
    // console.log(error)
// })

/// alternativa en una sola funcion ambas
mongoose.connect(mongooseMongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
.catch(error => console.log(error))

// mas prolijo

const db = mongoose.connection;

db.on('open', _ => {
    console.log(`db is connected to:${mongooseMongoDB}`)
})

// db.unica vez
db.once('open', _ => {
    console.log('once for first time')
})


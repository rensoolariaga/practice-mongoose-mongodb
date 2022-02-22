/////// ¡¡¡¡¡¡¡APUNTES!!!!!! /////////////

// coleccion == tabla
// documento === fila (con sus respectivos atributos(propiedades/columnas de la coleccion/tabla)) son json

//user seria la coleccion (tabla)

////////////////////////////// CREAR
db.user.insert([

// documento 1 (fila)
{
    "name": "renso", // atributo 1 (propiedad/columa "name")
    "age": 25,
    "genre": "male"
},


{
    "name": "juan",
    "age": 24,
    "genre": "male"

},
{
    "name": "juan",
    "age": 25,
    "genre": "male"

},
])

// ALTERNATIVA

json = [{
    "name": "renso",
    "age": 25,
    "genre": "male"
},
{
    "name": "juan",
    "age": 24,
    "genre": "male"

},
{
    "name": "juan",
    "age": 25,
    "genre": "male"

}]

db.user.insert(json)

// ALTERNATIVA
// RECOMENDADO POR DOCUMENTACION

.insertOne({})   // solo 1 // devuelve con id
.insertMany([{}]) // muchos // devuelve con id
.save({}) // si el obheti no existe, se crea. si existe, se actualiza

.pretty() // despues de una accion para que se vea lindo el json EJEMPLO:

db.users.find({
    age: { $lt: 50 }    // operador $lt: menor (<) que (lower than)
}).pretty()


.count() // despues de una accion te hace el conteo de documentos EJEMPLO: 

db.users.find({
    age: { $lt: 50 }    // operador $lt: menor (<) que (lower than)
}).count();

.limit() // despues de una accion te hace un limite de la cantidad que trae EJEMPLO:

db.users.find().sort({
    age: -1
}).limit(1)

.skip() // para saltear documentos EJEMPLO:

db.users.find().skip(5) // -----------> salteo los primeros 5

// -------OPERADORES---------- //
// { gt: } (>)
// { gte: } (>=)
// { lt: } (<)
// { lte: } (<=)
// { ne: } (!==)

// and: [{}, {}] listado de condiciones que deben cumplirse para obtener el documento (todas las condiciones deben cumplirse)

// or: [{}, {}] listado de condiciones que deben cumplirse para obtener el/los documento (que al menos una condicion se cumpla)

// { in: [] } listado de condiciones

// exists: true/false busco atributos

// find, sort, limit y skip ------> retornan cursores (¿arrays?)
// count y pretty funcionan en cursores (¿arrays?)

// print() == console.log

// { set: { }}

// {elemMatch: } permite filtrar sobre atributos de documentos de listados (¿array?)

// {push: } añade elemento al final de un listado


/////////////////////////////////////////// BUSCAR

// RECOMENDADO POR DOCUMENTACION

db.user.find() == findAll()
db.user.findOne() == findOne()

///////////////////// ¡¡¡¡¡¡¡¡EJERCICIOS!!!!!!!! //////////////////////

// obtener el usuario con username user7

db.users.find({        // retorna un cursor (¿array?)
    username: "user7"
})

// ALTERNATIVA 

db.users.findOne({       // retorna un documento
    username: "user7"
})

// obtener todos los usuarios con edad mator a 10

db.users.find({
    age: { $gt: 10 } // operador $gt: mayor (>) que (greater than)
})

// obtener la cantidad de usuarios con una edad menor a 50

db.users.find({
    age: { $lt: 50 }    // operador $lt: menor (<) que (lower than)
})

// obtener todos los usuarios con edad mayor a 10 y cuyo status sea activo

db.users.find({
$and: [                     
    { age: { $gt: 10} },
    {status: "active"}
]
})
// obtener todos los usuarios cuya edad no sea 11 

db.users.find({
    age: { $ne: 11 }  // operator $ne diferente (!==) (not equal) 
})

// obtener todos los usuarios que tengan edad 27 40 o 11

db.users.find({
    $or: [
        { age: 27},
        { age: 40},
        { age: 11}
    ] 
})

// ALTERNATIVA

db.users.find({
    age: { $in: [27, 40, 11]}
})

// obtener todos los usuarios con atributo status

db.users.find({
    status: { $exists: true }
})
// obtener todos los usuarios con status activo

db.users.find({
    status: "active"
})

// // MANERA OPTIMA 

db.users.find({
    $and: [
        { status: { $exists: true } },
        { status: "active" }
    ]
})

// obtener todos los usuarios con status activo y mail

db.users.find({
    $and: [
        { status: { $exists: true } },
        { status: "active" },
        { mail: { $exists: true } }
    ]
})

// obtener usuario con mayor edad

db.users.find().sort({
    age: -1
}) // --------------> asi te trae todos de mayor a menor

db.users.find().sort({
    age: -1
}).limit(1) // ----------------> asi te trae solo 1

// obtener los tres usuarios mas jovenes

db.users.find().sort({
    age: 1
}).limit(3)

// usando expresiones regulares      // == %%

db.users.find({
    email: /.com$/ // -----------> expresion regular para mails que terminen en .com
})

db.users.find({
    email: /@/ // -----------> expresion regular para que me traiga todos los que tengan un "@" en su mail
})

db.users.find({
    email: /^user1/ // -----------> expresion regular para que me traiga todos los que tengan un "user1" el comienzo de su mail
})

// codeo 

db.users.find( // ---------------> me traigo los nombres de los mayores iguales a 50 de edad
{
    age: {$gte: 50} // ------------> primero la condicion que busco (edad >= 50)
}, 
{
    _id: false,
    username: true // -----------> segundo lo que quiero que me traiga o no (username y no el id respectivamente)
})

////////////////////////////////// ACTUALIZAR

var userUpdate = db.users.findOne()

userUpdate.age = 9888989

userUpdate.status = "active"

userUpdate.mail = "tumama@gmail.com"

db.users.save(userUpdate) 

// MANERA OPTIMA
//.update() actualiza un solo documento (por default)

db.users.update(
    {
    "_id": ObjetId('1234') // ------------> condicion (busca el user con ese id)
},
{ 
    $set: {
        username: "Juan"  // -----------> seteo (setea el username en Juan)
    }
}
)

db.users.update(
    {
    "_id": ObjetId('1234') // ------------> condicion (busca el user con ese id)
},
{ 
    $unset: {
        username: true  // -----------> unseteo (quita el username (atributo/columna) de la collecion(tabla))
    }
}
)

// multiseteo 

db.users.update(
    {
        status: "inactive"    // ---------> condicion (1)
    },
    {
        $set: {
            status: "active" // -------> seteo
        }
    },
    { 
        multi: true     // ------> para todos los que cumplan la condicion (1)
    }
    )

// version actualizada
// RECOMENDADO POR DOCUMENTACION

.updateOne() // ---------> solo uno

db.users.updateOne(
    {
    username: "renso"
},
{ 
    $set: {
        status: "active"
    }
}
    )

.updateMany() // --------> muchos

db.users.updateMany(
    {
    email: { $exist: true }
}, 
{
    $set: {
        photo: "añadir"
    }
}
    )

////////////////////////// BORRAR 

db.users.remove({}) // ----------> borra todos

db.users.remove({
    status: "inactive"
})

//////////// ELIMINAR COLECCION (TABLA)

db.users.drop()

/////////////////// ELIMINAR BASE DE DATOS

db.dropDatabase()

//// mas ejercicios

// obetener todos los usuarios que radiquen en mexico

// entro al la propiedad address que tiene la propiedad country (asi sucesivamente)
db.users.find(
    {
    'address.country': 'MX' // -------> PROPIEDADES QUE ANIDAN PROPIEDADES (DOT NOTATION) SIEMPRE CON COMILLAS SIMPLES
}
    )

// actualizar cp

db.users.updateMany(
    {
        'address.zip': { $exist: true }
}, 
{
    $set: {
        'address.zip': 7223
    }
}
)


// obtener los usuarios con por lo menos un comentario positivo 

db.users.find({
    comments: {
        $elemMatch: {
            like: true
        }
    }
})

// añadir un nuevo comentario positivo al listado de comentarios para un usuario

db.users.updateOne(
    {
    username: 'renso'
}, 
    {
        $push: {
            comments: {
                like: true,
                body: 'mongodb'
            }
        }
}
    )


db.users.updateOne(
    {
    username: 'renso'
}, 
    {
        $push: {
            courses: 'mongodb'
        }
}
)

// añade una nueva etiqueta al comentario 4 del usuario 13

db.users.updateOne(
    {
    username: 'user13'
},
{ 
    $push: {
        'comments.3.tags': 'mongodb'
    }
}
)

// actualizar el comentario negativo del usuario 13 

db.users.updateOne(
    {
    username: 'user13',
    'comments.like': false // nos permite conocer el indice de los documentos dentro de la lista que queremos actualizar -condicion (2)-

},
{ 
    $set: {
        'comments.$.body': 'el curso de mongodb la rompe',
        'comments.$.like': true // ------------> el signo $ es un comodin que nos permite conocer el indice de la -condicion (2)-
        },
    
    $unset: {
        'comments.$.tags': true
    }
    
}
)




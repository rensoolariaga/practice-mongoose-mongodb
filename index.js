require('./connection')

const Product = require('./models/Product')

// creo el producto para la base de datos
const laptop = new Product({
    name: 'lapto',
    description: 'lenovo',
    price:'500'
})

// guardo el producto en la db
laptop.save((error, document) => {
    if(error) console.log(error);
    console.log(document)
})

console.log(laptop)
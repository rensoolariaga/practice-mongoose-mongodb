require('../connection');

const Product = require('../models/Product');

async function main() {
    const tecladoDb = await Product.find({
        name: 'teclado'
    })
    console.log(tecladoDb)
}

main()

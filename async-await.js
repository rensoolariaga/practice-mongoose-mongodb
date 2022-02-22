require('./connection');

const Product = require('./models/Product');

async function main() {
    const teclado = new Product({
        name: 'teclado',
        description: "inalambrico",
        price: 150
    })

    const productSaved = await teclado.save();
    console.log(productSaved)
}

main()
.then(productSaved => console.log(productSaved))
.catch(error => console.log(error));
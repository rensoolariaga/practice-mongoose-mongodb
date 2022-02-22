require('../connection');

const Product = require('../models/Product');

const createProduct = async () => {
    const cellphoneOne = new Product({
        name: 'cellphone',
        description: "samsung"

    })
    await cellphoneOne.save();

    const cellphoneTwo = new Product({
        name: 'cellphone2',
        description: "samsung"

    })
    await cellphoneTwo.save();
}

createProduct()

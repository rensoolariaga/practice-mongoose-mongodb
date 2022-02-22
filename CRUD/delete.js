require('../connection')

const Product = require('../models/Product')

const someFunction = async () => {
    // const deleteMany = await Product.deleteMany({name: 'cellphone'})
    // const deleteTeclado = await Product.findOneAndDelete({name:'teclado'})
    // const deleteOne = await Product.deleteOne({description: 'samsung'})
    const deleteById = await Product.findByIdAndDelete('12345')
    console.log(deleteById)
}

someFunction();
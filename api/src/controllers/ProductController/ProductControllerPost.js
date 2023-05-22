const { Product } = require('../../db');

const postProduct = async (name, details, price) =>{
    const newProduct = await Product.create({name, details, price});
    return newProduct;

}

module.exports = { postProduct }; 

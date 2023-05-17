const { Products } = require('../../db');

const postProduct = async (name, detail, price) =>{
    const newProduct = await Products.create({name, detail, price});
    return newProduct;

}

module.exports = { postProduct }; 

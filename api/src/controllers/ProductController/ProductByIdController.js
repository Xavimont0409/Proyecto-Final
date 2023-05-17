const { Product } = require('../../db');

const productById = async (id) => {
    return await Product.findByPk(id);
}

module.exports = { productById };
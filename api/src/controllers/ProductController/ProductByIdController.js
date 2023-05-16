const { Products } = require('../../db');

const productById = async (id) => {
    return await Products.findByPk(id);
}

module.exports = { productById };
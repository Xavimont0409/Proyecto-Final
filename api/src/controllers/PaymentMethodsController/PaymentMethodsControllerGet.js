const { PayMethod } = require('../../db');

const getPayMethods = async () => {
    return await PayMethod.findAll();
}

module.exports = { getPayMethods };
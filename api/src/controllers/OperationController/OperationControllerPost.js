const { Operation } = require('../../db')


const createOperation = async (id, idUser, cost, PayMethodId, detail) => {
    const newOperation = await Operation.create(id, idUser, cost, PayMethodId, detail);
    return newOperation;
}

module.exports = { createOperation };
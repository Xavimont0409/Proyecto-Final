const { Operation, PayMethod } = require('../../db')


const createOperation = async (cost, detail, CompanyId, PayMethodId, ApplicantId) => {
    const newOperation = await Operation.create({cost, detail, CompanyId, PayMethodId, ApplicantId});
    console.log(newOperation)
    return newOperation;
}

module.exports = { createOperation };
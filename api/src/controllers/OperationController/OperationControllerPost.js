const { Operation } = require('../../db')


const createOperation = async (cost, detail, CompanyId, PayMethodId, ApplicantId) => {
    const newOperation = await Operation.create({cost, detail, CompanyId, PayMethodId, ApplicantId});
    console.log('estoy aca')
    return newOperation;
}

module.exports = { createOperation };
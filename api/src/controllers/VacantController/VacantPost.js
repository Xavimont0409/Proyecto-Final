const { Vacant, Company } = require('../../db')

const postVacant = async(title, description, CompanyId) =>{
    console.log(CompanyId);
    const newVacant = await Vacant.create({title, description, CompanyId})
    return newVacant
}

module.exports={
    postVacant
}
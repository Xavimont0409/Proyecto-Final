const { Vacant, Workday } = require('../../db')

const postVacant = async(title, description, CompanyId, WorkdayId ) =>{
    const newVacant = await Vacant.create({title, description, CompanyId, WorkdayId })
    return newVacant
}

module.exports={
    postVacant
}
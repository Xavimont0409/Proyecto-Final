const { Vacant, Workday } = require('../../db')

const postVacant = async(title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId ) =>{
    const newVacant = await Vacant.create({title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId })
    return newVacant
}

module.exports={
    postVacant
}
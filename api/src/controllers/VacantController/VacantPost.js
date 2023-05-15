const { Vacant, Workday } = require('../../db');

const postVacant = async(title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId, creation_date ) =>{
    const newVacant = await Vacant.create({title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId, creation_date });
    return newVacant;
}

module.exports={
    postVacant
}
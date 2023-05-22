const { Vacant, ApplicantVacant } = require('../../db');

const postVacant = async(title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId, creation_date ) =>{
    const newVacant = await Vacant.create({title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId, creation_date });
    return newVacant;
}
const postVacantRelation = async(VacantId, ApplicantId)=>{
    const newVacantRelation = await ApplicantVacant.create({VacantId, ApplicantId});
    return newVacantRelation
}

module.exports={
    postVacant,
    postVacantRelation
}
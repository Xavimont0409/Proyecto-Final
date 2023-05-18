const { Vacant, Applicant } = require('../../db');

const postVacant = async(title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId, creation_date ) =>{
    const newVacant = await Vacant.create({title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId, creation_date });
    return newVacant;
}
const postVacantRelation = async(VacantId, ApplicantId)=>{
    const findVacant = await Vacant.findAll({where: {id :VacantId}})
    const findApplicant	= await Applicant.findAll({where: {id : ApplicantId}})
    await findVacant.setApplicant(findApplicant)
    return findVacant
}

module.exports={
    postVacant,
    postVacantRelation
}
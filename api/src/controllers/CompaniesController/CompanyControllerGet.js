const { Company, Vacant } = require('../../db');

const getAllCompany = () =>{
  return Company.findAll({include: {model: Vacant}});
}

const getCompanyId = (id) =>{
  return Company.findByPk(id, {include: {model: Vacant}});
}
module.exports={
  getAllCompany,
  getCompanyId
}
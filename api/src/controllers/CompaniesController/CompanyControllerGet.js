const { Company, Vacant } = require('../../db');

const getAllCompany = () =>{
  return Company.findAll({include: {model: Vacant}});
}

module.exports={
  getAllCompany
}
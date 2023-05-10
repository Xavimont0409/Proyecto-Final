const { Company, Vacant } = require('../../db');

const getAllCompany = () =>{
  return Company.findAll();
}

module.exports={
  getAllCompany
}
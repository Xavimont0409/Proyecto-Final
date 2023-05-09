const { Company } = require('../../db');

const getAllCompany = () =>{
  return Company.findAll();
}

module.exports={
  getAllCompany
}
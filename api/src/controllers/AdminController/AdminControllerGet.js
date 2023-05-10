const { Admin } = require('../../db');

const getAllAdmin = () =>{
  return Admin.findAll();
}

module.exports={
  getAllAdmin
}
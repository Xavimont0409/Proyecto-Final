const { Vacant } = require('../../db');

const getAllVacant = () =>{
  return Vacant.findAll();
}

module.exports={
  getAllVacant
}
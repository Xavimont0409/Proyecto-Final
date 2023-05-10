const { Cv } = require('../../db');

const getAllCv = () =>{
  return Cv.findAll();
}

module.exports={
  getAllCv
}
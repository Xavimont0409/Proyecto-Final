const { Cv, Experience } = require('../../db');

const getAllCv = () =>{
  return Cv.findAll({include:{
    model: Experience
  }});
}

module.exports={
  getAllCv
}
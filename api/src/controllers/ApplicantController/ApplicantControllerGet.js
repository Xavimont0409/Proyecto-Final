const { Applicant, Cv } = require('../../db')

const allApplicant = async() =>{
  return await Applicant.findAll({include: {model: Cv}})
}

module.exports = {
  allApplicant,
}
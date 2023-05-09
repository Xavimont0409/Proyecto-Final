const { Applicant } = require('../../db')

const allApplicant = async() =>{
  return await Applicant.findAll()
}

module.exports = {
  allApplicant,
}
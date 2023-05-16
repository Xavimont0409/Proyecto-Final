const { State } = require("../../db");

const createdState = async(registed, name, ApplicantId, CompanyId) => {
  const newState = await State.create({ registed, name, ApplicantId, CompanyId })
  return newState
};

module.exports = {
  createdState
}
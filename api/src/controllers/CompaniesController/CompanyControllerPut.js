const { Model } = require("sequelize");
const { Company } = require("../../db");

const updateCompany = async(id, name, business_name, ruc, cuit, country, email, password, registed) => {
  const findCompany = await Company.findOne({where: { id: id}})
    if(name) findCompany.name = name
    if(business_name) findCompany.business_name = business_name
    if(ruc) findCompany.ruc = ruc
    if(cuit) findCompany.cuit = cuit
    if(country) findCompany.country = country
    if(email) findCompany.email = email
    if(password) findCompany.password = password
    if(registed) findCompany.registed = registed

    const putCompany = await findCompany.save()
    return putCompany
};


module.exports = {
  updateCompany
}

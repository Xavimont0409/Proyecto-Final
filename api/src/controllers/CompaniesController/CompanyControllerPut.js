const {
  Company,
  Vacant,
  Workday,
  WorkMethod,
  Seniority,
  Star
} = require("../../db");

const updateCompany = async (id, name, business_name, ruc, cuit, country, email, password, registed) => {
  const body = {};
  if (name) body.name = name;
  if (business_name) body.business_name = business_name;
  if (ruc) body.ruc = ruc;
  if (cuit) body.cuit = cuit;
  if (country) body.country = country;
  if (email) body.email = email;
  if (password) body.password = password;
  if (registed) body.registed = registed;

  let response = {};
  await Company.update(body, {
    include: [
      {
        model: Vacant,
        attributes: ["title", "description"],
        include: [
          {
            model: Workday,
            attributes: ["name"],
          },
          {
            model: WorkMethod,
            attributes: ["name"],
          },
          {
            model: Seniority,
            attributes: ["name"],
          },
        ],
      },
      {
        model: Star,
        attributes: ["stars", "text"]
      }
    ],
    where: { id: id }
  }).then(num => {
    if (num == 1) response = body;
  });
  return response;
};


module.exports = {
  updateCompany
}

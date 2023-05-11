const { Company, Vacant,Workday } = require('../../db');

const getAllCompany = () =>{
  return Company.findAll({include:{
    model: Vacant,
    attributes: ["title","description"],
    include:{ model : Workday,
    attributes : ["name"]
    }
  }});
}

const getCompanyId = (id) =>{
  return Company.findAll({
    where: { id },
    include: {
      model: Vacant,
      attributes: ["title","description"],
      include:{ model : Workday,
      attributes : ["name"]
      }
    }
  });
}
module.exports={
  getAllCompany,
  getCompanyId
}
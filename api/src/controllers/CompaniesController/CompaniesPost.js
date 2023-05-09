const { Company } = require('../models/Company');

const createCompany = async (req, res) => {
    try {
      const { name, business_name, ruc, cuit, email } = req.body;
      const company = await Company.create({ name, business_name, ruc, cuit, email });
      res.status(201).json(company);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createCompany,
};

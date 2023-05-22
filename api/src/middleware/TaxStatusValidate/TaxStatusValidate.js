const { validateRequiredField } = require('../../helpers/requiredFieldsHelper');

const validateTaxStatus = async (req, res, next) => {
    try {
        const { taxStatus } = req.body;
        validateRequiredField(taxStatus, 'Tax Stastus');
        next();
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    validateTaxStatus,
};
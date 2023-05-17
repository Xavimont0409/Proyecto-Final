const { validateRequiredField } = require('../../helpers/requiredFieldsHelper');

const validateOperations = async (req, res, next) => {
    try {
        const { cost } = req.body;
        validateRequiredField(cost , 'Cost');
        if (cost < 0)
            throw new Error('Cost value must be positive or zero');
        next();
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    validateOperations,
};


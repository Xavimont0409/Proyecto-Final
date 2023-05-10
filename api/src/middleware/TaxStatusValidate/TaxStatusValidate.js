const validateTaxStatus = async (req, res, next) => {
    try {
        const { taxStatus } = req.body;
        if (!taxStatus)
            throw new Error('Tax Status does not exist');
        next();
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    validateTaxStatus,
};
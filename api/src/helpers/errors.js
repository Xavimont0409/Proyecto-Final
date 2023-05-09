const errorUser = (error, res) => {
    return res.status(404).json({ error: error.message });
};

module.exports = errorUser;
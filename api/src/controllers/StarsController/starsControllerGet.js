const { Star } = require("../../db");

const getStars = async () => {
    return await Star.findAll();
}

module.exports = { getStars }
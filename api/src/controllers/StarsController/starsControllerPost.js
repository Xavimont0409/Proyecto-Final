const { Star } = require("../../db");

const postStars = async(stars, CompanyId, text) => {
  const newStar = await Star.create({ stars, CompanyId, text })
  return newStar
};

module.exports = {
  postStars
}

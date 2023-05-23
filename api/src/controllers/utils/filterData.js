const filterData = (query, array) => {
  const filteredArray = array.filter(element => {
    const keys = Object.keys(element.dataValues);
    return keys.some(key => {
      if (typeof element.dataValues[key] === "string") {
        const words = query.toLowerCase().split(" ");
        return words.some(word => element.dataValues[key].toLowerCase().includes(word));
      }
    });
  });
  return filteredArray;
};

module.exports = filterData;
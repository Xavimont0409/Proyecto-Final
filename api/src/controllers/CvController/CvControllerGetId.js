const { Cv } = require('../../db');

const getIdCv = async (id) =>{
    const findCv = await Cv.findByPk(id)

    return findCv
}

module.exports = {
    getIdCv
}
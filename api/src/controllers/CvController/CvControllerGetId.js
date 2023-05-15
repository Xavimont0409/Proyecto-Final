const { Cv, Experience } = require('../../db');

const getIdCv = async (id) =>{
    const findCv = await Cv.findAll({
        where: { id } ,
        include: {
            model : Experience
        }
    })

    return findCv;
}

module.exports = {
    getIdCv
}
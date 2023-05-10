const { Vacant, Journey } = require('../../db')

const postVacant = async(title, description, VacantId) =>{
    const newVacant = await Vacant.create({title, description, VacantId})
    return newVacant
}

module.exports={
    postVacant
}
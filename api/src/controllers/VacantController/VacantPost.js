const { Vacant } = require('../../db')

const postVacant = async(title, description) =>{
    const newVacant = await Vacant.create({title, description})
    return newVacant
}

module.exports={
    postVacant
}
const { Vacant, WorkMethod } = require('../../db')

const getAllVacant = () =>{
    return Vacant.findAll()
}

module.exports = {
    getAllVacant
}
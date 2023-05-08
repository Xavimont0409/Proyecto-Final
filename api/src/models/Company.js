const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Company', {
        id:{

        },
        name: {

        },
        cuit: {

        },
        email: {

        },
        phone: {

        },
    } , {
        timestamps: false
      })
}
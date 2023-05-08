const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('User', {
        id:{

        },
        name: {

        },
        email: {

        },
        phone: {

        },
    } , {
        timestamps: false
      })
}
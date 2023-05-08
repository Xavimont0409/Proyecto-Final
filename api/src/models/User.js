const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('User', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        cellphone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
    } , {
        timestamps: false
      })
}
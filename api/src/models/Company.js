const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Company', {
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
        business_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        ruc: {
            type: DataTypes.STRING(13),
            allowNull: false,
            unique: true,
        },
        cuit: {
            type: DataTypes.STRING(11),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
                }
        }
    } , {
        timestamps: false
      })
}
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('applicant', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
    }, {
        timestamps: false
    })
}
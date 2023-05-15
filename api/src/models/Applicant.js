const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Applicant', {
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,16}$/
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
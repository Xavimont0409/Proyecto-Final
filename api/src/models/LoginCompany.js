const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('loginCompany', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RUC: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cuit: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });
}
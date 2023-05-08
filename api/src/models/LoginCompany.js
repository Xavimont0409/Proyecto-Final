const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('LoginCompany', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ruc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cuit: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });
}
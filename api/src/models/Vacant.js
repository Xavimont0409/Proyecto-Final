const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Vacant', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUppercase: true,
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        creation_date: {
            type: DataTypes.DATEONLY,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        operation:{
            type: DataTypes.STRING,
            defaultValue: "none",
        }
    })
}
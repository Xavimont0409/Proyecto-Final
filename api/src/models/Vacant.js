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
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        creation_date: {
            type: DataTypes.DATEONLY,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    })
}
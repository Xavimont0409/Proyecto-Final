const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Document', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.ENUM('DNI', 'Passport'),
            allowNull: false
        },
    },
    { 
        timestamps: false
    })
}
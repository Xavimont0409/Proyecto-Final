const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('PayMethod', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    })
}
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Operation', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cost: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        }
    }, {
        timestamps: false
    })
}
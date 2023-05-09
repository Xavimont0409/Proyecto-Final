const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Journey', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.ENUM('fulltime', 'part-time'),
            allowNull: false
        },
    },
    { 
        timestamps: false
    })
}